import * as actions from '../actions/index';

const initialState = {
    loaded: false,
    user: {
        username: null,
        id: null,
        socketID: null
    }
};

export default function auth(state = initialState, action) {
    console.log("Heya!  Action Type: " + action.type)
    switch(action.type) {
        // during fetch for authorization
        case 'AUTH_LOAD':
            return {
                ...state,
                loading: true
            };
        // when authorization has completed
        case 'AUTH_LOAD_SUCCESS':
            return {
                ...state,
                loading: false,
                loaded: true,
                user: {
                    ...state.user, username: action.user
                }
            };    
        // if authorization fails to load    
        case 'AUTH_LOAD_FAIL':
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.error
            };
        // to trigger login page
        case 'AUTH_SIGNIN':
            return {
                ...state,
                signingIn: true
            };
        case 'AUTH_SIGNIN_SUCCESS':
            return {
                ...state,
                signingIn: false,
                user: {
                    username: action.user.name,
                    id: actions.user.id
                }
            };
        case 'AUTH_SIGNIN_FAIL':
            return {
                ...state,
                user: { 
                    username: null,
                    id: null
                },
                signInError: action.error
            };
        // to trigger sign up page
        case 'AUTH_SIGNUP':
            return {
                ...state,
                signingUp: true
            };
        case 'AUTH_SIGNUP_SUCCESS':
            return {
                ...state,
                signingUp: false,
                user: {
                    username: action.newUser.name,
                    id: action.newUser.id,
                    socketID: null
                }
            };
        // for logging out of authorized place
        case 'AUTH_SIGNOUT':
            return {
                ...state,
                sighingOut: true
            };
        case 'AUTH_SIGNOUT_SUCCESS':
            return {
                ...state, 
                signingOut: false,
                user: {
                    username: null,
                    id: null
                }
            };
        case 'AUTH_SIGNOUT_FAIL':
            return {
                ...state,
                signingOut: false,
                sigingOutError: action.error
            };
        default:
            return state;        
    }
}
