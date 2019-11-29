import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Platform, FlatList, TouchableOpacity } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

import HeaderButton from '../components/HeaderButton';
import * as placesActions from '../store/places-actions';
import Colors from '../constants/Colors';

const PlacesListScreen = props => {
    const places = useSelector(state => state.places.places);
    console.log(places)
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(placesActions.loadPlaces());
    // }, [dispatch]);

    return (
        <View>
            <Text>PlacesList</Text>
            <FlatList
                data={places}
                keyExtractor={item => item.title}
                renderItem={itemData => (

                    <TouchableOpacity
                        style={styles.placeItem}>
                        <View style={styles.infoContainer}>
                            <Text style={styles.title}>{itemData.item.title}</Text>
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



{/* <FlatList
            data={places}
            keyExtractor={item => item.title}
            renderItem={itemData => (

                <TouchableOpacity onPress={() => {
                    props.navigation.navigate('PlaceDetail', {
                        placeTitle: itemData.item.title
                    });
                }}
                    style={styles.placeItem}>
                    <View style={styles.infoContainer}>
                        <Text style={styles.title}>{itemData.item.title}</Text>
                    </View>
                </TouchableOpacity>
            )}
        /> */}