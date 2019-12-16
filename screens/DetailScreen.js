import React from 'react';
import { ScrollView, TouchableOpacity, Image, View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import { useSelector, useDispatch } from 'react-redux';

import * as placesActions from "../store/places-actions"

const DetailScreen = props => {
    const placeId = props.navigation.getParam('placeId');

    const dispatch = useDispatch();

    const onDelete = (id) => {
        dispatch(placesActions.deletePlaceAction(id));
        props.navigation.navigate('ListPlaces', {
            onBack: () => this.refresh()
        });
    }

    // get all places
    const selectedPlace = useSelector(state =>
        state.places.places.find(place => place.id === placeId)
    );

    return (
        <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
            <Image source={{ uri: selectedPlace.imageUri }} style={styles.image} />
            <View style={styles.locationContainer}>
                <View style={styles.addressContainer}>
                    <Text style={styles.title}>{selectedPlace.title}</Text>
                    <Text style={styles.address}>{selectedPlace.address}</Text>
                </View>
                <TouchableOpacity
                    onPress={() => onDelete(placeId)}>
                    <Text>Delete</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

DetailScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('placeTitle')
    };
};

const styles = StyleSheet.create({
    image: {
        height: '35%',
        minHeight: 300,
        width: '100%',
        backgroundColor: '#ccc'
    },
    locationContainer: {
        marginVertical: 20,
        width: '90%',
        maxWidth: 350,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addressContainer: {
        padding: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    address: {
        color: Colors.primary,
        textAlign: 'center'
    },
    mapPreview: {
        width: '100%',
        maxWidth: 350,
        height: 300,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    }
});

export default DetailScreen;