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
    displayState: {
        menuActive: false
    }
};

const validation = ( state = initialState, action ) => {
    console.log("Tada: " + action.type);
    switch(action.type) {
        case 'FETCH_USER_REQUEST':
            console.log("fetching user");
            return Object.assign({}, state, {
                fetching: true
            });
        case 'NEW_USER':
            console.log("new user");
            return Object.assign({}, state, {

            });
        case 'FETCH_SUCCESS':
            console.log("fetch success");
            return Object.assign({}, state, {
                fetching: false
            });
        case 'SHOW_SIGNUP': 
            console.log("Hello!!!");
            return Object.assign({}, state, {
                userState: {
                    login: false
                }
            });
        
        case 'SHOW_LOGIN':
            console.log("Howdy");
            return Object.assign({}, state, {
                userState: {
                    login: true
                }
            });
            
        case 'ENTER_GALLERY':   //would be dispatched upon successful server query return
            return Object.assign({}, state, {
                authorized: true
            });
        
        default: return state;
    }
};
// dependent on user authorization - require state: authorized : true
const gallery = ( state = {}, action ) => {
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

const menu = ( state = initialState.displayState, action ) => {
    switch(action.type) {
        case 'TOGGLE_MENU':
            return Object.assign({}, state, {
                menuActive: !state.menuActive,
                menu: state.menu
            });
        // case 'USER_MENU':
        //     return Object.assign({}, state, {
        //         menu: "user_menu"  
        //     });
        // case 'GALLERY_MENU':
        //     return Object.assign({}, state, {
        //         menu: "gallery_menu"
        //     });
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