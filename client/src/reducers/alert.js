/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
import { SET_ALERT,REMOVE_ALERT } from '../actions/types';
const initialState = [];

export default function(state=initialState, action){
    const {type, payload}=action;
    switch(type){
        case SET_ALERT:
            return [...state, action.payload];
        case REMOVE_ALERT:
            return state.filter(alert=>alert.id!==payload);
        default:
            return state;
    }
}


