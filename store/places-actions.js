export const ADD_PLACE = 'ADD_PLACE';

export const addPlace = (id, title, location) => {
    return { type: ADD_PLACE, placeData: { id: id, title: title, location: location } }


};

