import { INSERT_PLACE, FETCH_PLACES, DELETE_PLACE } from './places-actions';
import Place from '../models/Place';

const initialState = {
    places: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case INSERT_PLACE:
            const newPlace = new Place(
                action.placeData.id.toString(),
                action.placeData.title,
                action.placeData.imageUri,
            );
            return {
                places: state.places.concat(newPlace)
            };
        case FETCH_PLACES:
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
        case DELETE_PLACE:
            return {
                places: state.places.filter(place =>
                    place.id !== action.placeData.id
                )
            };
        default:
            return state;
    }
};