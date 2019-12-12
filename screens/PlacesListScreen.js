import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Platform, Image, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Colors from '../constants/Colors';

import * as placesActions from "../store/places-actions"

const PlacesListScreen = props => {
    const places = useSelector(state => state.places.places);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(placesActions.loadPlaces());
    }, [dispatch]);


    const onSelect = (title) => {
        props.navigation.navigate('PlaceDetail', {
            placeTitle: title
        });
    }

    return (
        <View>
            <FlatList
                data={places}
                keyExtractor={(item, index) => index.toString()}
                renderItem={itemData => (
                    <TouchableOpacity
                        onPress={() => onSelect(itemData.item.title)}
                        style={styles.placeItem}>
                        <Image style={styles.image} source={{ uri: itemData.item.imageUri }} />
                        <View style={styles.infoContainer}>
                            <Text style={styles.title}>{itemData.item.id} - {itemData.item.title}</Text>

                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>

    );
};

PlacesListScreen.navigationOptions = navData => {
    return {
        headerTitle: 'All Places'
    };
};

const styles = StyleSheet.create({
    placeItem: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingVertical: 15,
        paddingHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#ccc',
        borderColor: Colors.primary,
        borderWidth: 1
    },
    infoContainer: {
        marginLeft: 25,
        width: 250,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    title: {
        color: 'black',
        fontSize: 18,
        marginBottom: 5
    },
    address: {
        color: '#666',
        fontSize: 16
    }
});

export default PlacesListScreen;