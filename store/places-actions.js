import * as FileSystem from 'expo-file-system'
import { insertPlace, fetchPlaces } from "../database/db"

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
            await FileSystem.moveAsync({
                from: image,
                to: newPath
            })

            // ADD PLACE into DATABASE
            const insertDB = await insertPlace(
                title,
                newPath,
                "Dummy Address",
                15.6,
                12.3
            );
            console.log(insertDB)

            // Reducer ADD_PLACE (adds an item to store)
            dispatch({
                type: ADD_PLACE,
                placeData: {
                    id: insertDB.insertId,
                    title: title,
                    location: location,
                    imageUri: newPath
                }
            })

        } catch (err) { console.log(err) }
    }
};



export const LOAD_PLACES = 'LOAD_PLACES';
export const loadPlaces = () => {
    return async dispatch => {
        try {
            const dbResult = await fetchPlaces();
            console.log(dbResult);
            dispatch({ type: LOAD_PLACES, places: dbResult.rows._array });
        } catch (err) {
            throw err;
        }
    };
};