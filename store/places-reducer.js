import { ADD_PLACE, LOAD_PLACES } from './places-actions';
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
            return {
                places: state.places.concat(newPlace)
            };
        case LOAD_PLACES:
            return {
                places: action.places.map(
                    pl =>
                        new Place(
                            pl.id.toString(),
                            pl.title,
                            pl.imageUri,
                            pl.address,
                            pl.lat,
                            pl.lng
                        )
                )
            };
        default:
            return state;
    }
};