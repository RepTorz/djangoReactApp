import axios from 'axios';

import { GET_LEADS } from './types';

// GET_LEADS
export const getLeads = () => dispatch => {
    axios.get('/api/leads/')
        .then(res => {
            dispatch({
                type: GET_LEADS,
                payload: res.data
            });
        }).catch(err => console.log(err));

}

// DELETE LEAD
export const deleteLeads = () => dispatch => {
    axios.get('/api/leads/')
        .then(res => {
            dispatch({
                type: GET_LEADS,
                payload: res.data
            });
        }).catch(err => console.log(err));

}