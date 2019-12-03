import { ADD_PLACE } from './places-actions';
import Place from '../models/Place';

const initialState = {
    places: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:

            //console.log(action.placeData.id, action.placeData.title, action.placeData.location)

            const newPlace = new Place(
                action.placeData.id,
                action.placeData.title,
                action.placeData.location
            );
            return {
                places: state.places.concat(newPlace)
            };
        default:
            return state;
    }
};