import React, { useState } from 'react';
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

import ImagePicker from '../components/ImagePicker'


const NewPlaceScreen = props => {

    // ADD PLACE
    const [titleValue, setTitleValue] = useState('');
    const dispatch = useDispatch();

    const savePlaceHandler = () => {
        dispatch(placesActions.insertPlaceAction(titleValue, selectedImage));
        props.navigation.goBack();
    };

    // SET IMAGE
    const [selectedImage, setSelectedImage] = useState()

    const imageTakenHandler = imagePath => {
        setSelectedImage(imagePath)
    }

    return (
        <ScrollView>
            <View style={styles.form}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => setTitleValue(text)}
                    value={titleValue}
                    placeholder="Title"
                />
                <ImagePicker onImageTaken={imageTakenHandler} />
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