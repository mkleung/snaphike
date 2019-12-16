import * as FileSystem from 'expo-file-system'
import { insertPlaceDB, fetchPlacesDB, deletePlaceDB } from "../database/db"

// INSERT PLACE ACTION
export const INSERT_PLACE = 'INSERT_PLACE';
let previousId = 0;
export const insertPlaceAction = (title, image) => {
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
            const insertDB = await insertPlaceDB(
                title,
                newPath,
                "Dummy Address",
                15.6,
                12.3
            );

            // Reducer ADD_PLACE (adds an item to store)
            dispatch({
                type: INSERT_PLACE,
                placeData: {
                    id: insertDB.insertId,
                    title: title,
                    imageUri: newPath
                }
            })

        } catch (err) { console.log(err) }
    }
};


// FETCH PLACES ACTION
export const FETCH_PLACES = 'FETCH_PLACES';
export const fetchPlacesAction = () => {
    return async dispatch => {
        try {
            const dbResult = await fetchPlacesDB();
            dispatch({ type: FETCH_PLACES, places: dbResult.rows._array });
        } catch (err) {
            throw err;
        }
    };
};



// DELETE PLACE ACTION
export const DELETE_PLACE = 'DELETE_PLACE';
export const deletePlaceAction = (id) => {
    return async dispatch => {
        try {

            const deleteDB = await deletePlaceDB(
                id
            );
            dispatch({
                type: DELETE_PLACE,
                placeData: {
                    id: deleteDB.id
                }
            })
        } catch (err) { console.log(err) }
    }
};