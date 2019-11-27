export const ADD_PLACE = 'ADD_PLACE';

export const addPlace = (title, image, location) => {
    return { type: ADD_PLACE, placeData: { title: title } }
};

