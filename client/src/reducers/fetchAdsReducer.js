import { FETCH_ADS } from '../actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_ADS:
        return action.payload || [];

        default:
            return state;
    }
}