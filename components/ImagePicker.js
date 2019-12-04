import React, { useState } from 'react'
import { View, Button, Image, Text, StyleSheet, Alert } from 'react-native'
import Colors from '../constants/Colors'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'

const ImgPicker = props => {

    const [pickedImage, setPickedImage] = useState()

    const takeImageHandler = async () => {
        // ASK FOR CAMERA PERMISSIONS
        const result = await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL)
        if (result.status !== 'granted') {
            Alert.alert(
                "Insufficient Permissions!",
                "You need to grant camera permissions to use this app",
                [{ text: "OK" }]
            )
            return false
        }
        else {
            // ACCESS CAMERA
            const image = await ImagePicker.launchCameraAsync({
                allowEditing: true,
                aspect: [16, 9],
                quality: 0.5,
            });
            setPickedImage(image.uri)
            props.onImageTaken(image.uri)
        }
    }

    return (
        <View style={styles.imagePicker}>
            <View style={styles.imagePreview}>
                {!pickedImage ? (
                    <Text>No Image picked</Text>
                ) : (
                        <Image style={styles.image} source={{ uri: pickedImage }} />
                    )}
            </View>
            <Button
                title="Take Image"
                color={Colors.primary}
                onPress={takeImageHandler} />
        </View>
    )
}

const styles = StyleSheet.create({
    imagePicker: {
        alignItems: 'center',
        marginBottom: 15
    },
    imagePreview: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#CCC',
        borderWidth: 1
    },
    image: {
        width: '100%',
        height: '100%'
    }
})

export default ImgPicker;