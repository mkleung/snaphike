export const ADD_PLACE = 'ADD_PLACE';

let previousId = 0;

export const addPlace = (title, location) => {

    let id = previousId + 1;
    previousId = id;
    return {
        type: ADD_PLACE,
        placeData: {
            id: id,
            title: title,
            location: location
        }
    }
};
