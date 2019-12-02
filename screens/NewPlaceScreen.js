import React, { useState, useEffect } from 'react';
import {
    ScrollView,
    View,
    Button,
    Text,
    TextInput,
    StyleSheet
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Colors from '../constants/Colors';
import * as placesActions from '../store/places-actions';

const NewPlaceScreen = props => {
    const [titleValue, setTitleValue] = useState('');
    const [locationValue, setLocationValue] = useState('');
    const [id, setId] = useState("0")

    const dispatch = useDispatch();

    const places = useSelector(state => state.places.places);


    // Constructor
    useEffect(() => {
        if (places.length > 0) {
            var lastItem = places.slice(-1)[0];
            setId(String(parseInt(lastItem.id) + 1))
        }
    }, []);


    const titleChangeHandler = text => {
        setTitleValue(text);
    };

    const locationChangeHandler = text => {
        setLocationValue(text);
    };

    const savePlaceHandler = () => {
        dispatch(placesActions.addPlace(id, titleValue, locationValue));
        props.navigation.goBack();
    };

    return (
        <ScrollView>
            <View style={styles.form}>

                <TextInput
                    style={styles.textInput}
                    onChangeText={titleChangeHandler}
                    value={titleValue}
                    placeholder="Title"
                />
                <TextInput
                    style={styles.textInput}
                    onChangeText={locationChangeHandler}
                    value={locationValue}
                    placeholder="Location"
                />
                <Button
                    title="Save Place"
                    color={Colors.primary}
                    onPress={savePlaceHandler}
                />
            </View>
        </ScrollView>
    );
};

NewPlaceScreen.navigationOptions = {
    headerTitle: 'Add Place'
};

const styles = StyleSheet.create({
    form: {
        margin: 30
    },
    label: {
        fontSize: 18,
        marginBottom: 15
    },
    textInput: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 15,
        paddingVertical: 4,
        paddingHorizontal: 2
    }
});

export default NewPlaceScreen;