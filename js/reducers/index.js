import * as actions from '../actions/index';
//import { initialState } from '../store';
import { combineReducers } from 'redux';

export const initialState = {
    authorized: false
};

const validation = ( state = initialState, action ) => {
    switch(action.type) {
        case 'CHECK_USER':   //query server to check if user exists
            return Object.assign({}, state, {
                email: email,
                password: password  
            });
        
        case 'DIRECT_TO_SIGNUP': 
            return Object.assign({}, state, {
                authorized: false
            });
        
        case 'ENTER_GALLERY':   //would be dispatched upon successful server query return
            return Object.assign({}, state, {
                authorized: true
            });
        
        default: return state;
    }
};

const gallery = ( state = 0, action ) => {
    return state;
};

const menu = ( state = 0, action ) => {
    return state;
};



export default combineReducers({
    validation: validation,
    gallery: gallery,
    menu: menu
});