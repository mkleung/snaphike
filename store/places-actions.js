import * as FileSystem from 'expo-file-system'


export const ADD_PLACE = 'ADD_PLACE';

let previousId = 0;

export const addPlace = (title, location, image) => {
    let id = previousId + 1;
    previousId = id;

    return async dispatch => {

        // Get filename fr0m image .e.g. myimage.jpg
        // Then create a new path
        const newPath = FileSystem.documentDirectory + image.split('/').pop();;

        // The code below takes exinsting image path and
        // Saves it into the new path on filesystem
        try {
            await FileSystem.moveAsync({ from: image, to: newPath })
        } catch (err) { console.log(err) }

        // Reducer ADD_PLACE (adds an item to store)
        dispatch({
            type: ADD_PLACE,
            placeData: {
                id: id,
                title: title,
                location: location,
                image: newPath
            }
        })

    }
};
