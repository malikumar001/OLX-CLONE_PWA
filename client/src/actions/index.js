import axios from 'axios';
import { FETCH_USER, FETCH_ADS } from './types';

export const fetchUser = () => async dispatch => {
    
    axios.get('/api/user').then((user) => dispatch({ type: FETCH_USER, payload: user}));
     
}


export const fetchAds = () => async dispatch => {

    axios.get('/api/allads')
    .then(res => dispatch({ type: FETCH_ADS, payload: res.data.allads}) )
    
}








