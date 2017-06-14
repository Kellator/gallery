import * as actions from './actions/index';

const combineReducers = require('redux').combineReducers;
const reducer = combineReducers({
    validation: validationReducer,
    gallery: galleryReducer,
    menu: menuReducer
});

const validationReducer = ( state, action ) => {
    switch(action.type) {
        case 'CHECK_USER': {  //query server to check if user exists
            return Object.assign({}, state, {
                email: email,
                password: password  
            });
        }
        case 'DIRECT_TO_SIGNUP': {
            return Object.assign({}, state, {
                authorized: false
            });
        }
        case 'ENTER_GALLERY': {  //would be dispatched upon successful server query return
            return Object.assign({}, state, {
                authorized: true
            });
        }
        default: return state;
    }
};

const galleryReducer = ( state, action ) => {

};

const menuReducer = ( state, action ) => {

};