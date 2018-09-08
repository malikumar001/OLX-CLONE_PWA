import { combineReducers } from 'redux';
import authReducer from './authReducer';
import fetchAdsReducer from './fetchAdsReducer';
  

export default combineReducers({
    auth: authReducer,
    fetchAd: fetchAdsReducer
});

//this is the index.js file included in the reducers.js file not orignal file.
// in this file we will combine all our our reducers.