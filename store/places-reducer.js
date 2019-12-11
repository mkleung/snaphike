import { ADD_PLACE } from './places-actions';
import Place from '../models/Place';

const initialState = {
    places: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            const newPlace = new Place(
                action.placeData.id.toString(),
                action.placeData.title,
                action.placeData.location,
                action.placeData.imageUri,
            );
            console.log(newPlace)
            return {
                places: state.places.concat(newPlace)
            };
        default:
            return state;
    }
};