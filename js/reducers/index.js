import * as actions from '../actions/index';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'

const initialState = {
    userState: {
        authorized: false,
        login: true,
        user: {
            email: ''
        } 
    },
    displayState: {}
};

const validation = ( state = initialState.userState, action ) => {
    console.log("Tada: " + action.type);
    switch(action.type) {
        case 'CHECK_USER':   //query server to check if user exists
            console.log("what's up");
            return Object.assign({}, state, {
                user: { //should this really be part of the store?  or just sent to the server for validation
                    email: email
                } 
            });
        
        case 'SHOW_SIGNUP': 
            console.log("Hello!!!");
            return Object.assign({}, state, {
                login: false
            });
        
        case 'SHOW_LOGIN':
            console.log("Howdy");
            return Object.assign({}, state, {
                login: true
            });
            
        case 'ENTER_GALLERY':   //would be dispatched upon successful server query return
            return Object.assign({}, state, {
                authorized: true
            });
        
        default: return state;
    }
};
// dependent on user authorization - require state: authorized : true
const gallery = ( state = 0, action ) => {
    switch(action.type) {
        case 'SHOW_GALLERY': 
            return Object.assign({}, state, {
                gallery: gallery
            });
        case 'SHOW_WALL':
            return Object.assign({}, state, {
                wall: wall
            });
        case 'SHOW_EXHIBIT':
            return Object.assign({}, state, {
                exhibit: exhibit
            });
        case 'SHOW_USER_GALLERY':
            return Object.assign({}, state, {
                userID: userID,
                gallery: gallery
            });
        case 'SHOW_USER_WALL':
            return Object.assign({}, state, {
                userID: userID,
                wall: wall
            });
        case 'ADD_NEW_EXHIBIT': 
            return Object.assign({}, state, {
                title: title,
                image: image,
                source: source,
                categories: categories,
                userID: userID
            });
        case 'ADD_TO_WALL':
            return Object.assign({}, state, {
                exhibit: exhibit,
                wall: wall
            });
        case 'ADD_NEW_WALL':
            return Object.assign({}, state, {
                title: title,
                categories: categories
            });
        default: return state;
    }
};

const menu = ( state = 0, action ) => {
    switch(action.type) {
        case 'EXPAND_MENU':
            return Object.assign({}, state, {
                menu: menu  
            });
        case 'HIDE_MENU':
            return Object.assign({}, state, {
                menu: menu
            });
        default: return state;
    }
};

export default combineReducers({
    validation,
    gallery,
    menu,
    routing: routerReducer,
    form: formReducer
});