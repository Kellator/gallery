'user strict';
import * as galleryActions from '../actions/gallery_actions';
import axios from 'axios';
let fetchUrl = 'http://localhost:5050/';
let userUrl = 'http://localhost:8080/';



export const ADD_USER = 'ADD_USER';
export const CHECK_USER = 'CHECK_USER'; 

export const AUTH_LOAD = 'AUTH_LOAD';
export const AUTH_LOAD_SUCCESS = 'AUTH_LOAD_SUCCESS';
export const AUTH_LOAD_FAIL = 'AUTH_LOAD_FAIL';

export const AUTH_SIGNIN = 'AUTH_SIGNIN';
export const AUTH_SIGNIN_SUCCESS = 'AUTH_SIGNIN_SUCCESS';
export const AUTH_SIGNIN_FAIL = 'AUTH_SIGNIN_FAIL';

export const AUTH_SIGNOUT = 'AUTH_SIGNOUT';
export const AUTH_SIGNOUT_SUCCESS = 'AUTH_SIGNOUT_SUCCESS';
export const AUTH_SIGNOUT_FAIL = 'AUTH_SIGNOUT_FAIL';

export const AUTH_SIGNUP = 'AUTH_SIGNUP';
export const AUTH_SIGNUP_SUCCESS = 'AUTH_SIGNUP_SUCCESS';
export const AUTH_SIGNUP_FAIL = 'AUTH_SIGNUP_FAIL';

export const RECEIVE_SOCKET = 'RECIEVE_SOCKET';

export const addUser = (username, email, password) => {
    return dispatch => {
        axios({
            method: 'post',
            url: fetchUrl + 'register', 
            data: {
                username: username,
                email: email,
                password: password
            }
        })
        .then(res => {
            if(res.status == 201) {
                console.log(res);
                let username = res.data.username;
                let password = res.data.password;
                let email = res.data.email;
                dispatch(checkUser(username, email, password));
            }
        })
        .catch(error => {
            console.log(error);
            // if email or username == existing email or username, send message
        });
        console.log("REGISTRATION COMPLETED");
    }
};
export const checkUser = (username, email, password) => {
    return dispatch => {
        dispatch(authLoadSuccess())
        axios({
            method: 'post',
            url: fetchUrl + 'login',
            data: {
                username: username,
                email: email,
                password: password
            }
        })
        .then(res => {
            let user = res.data.username;
            let email = res.data.email;
            let id = res.data.id;
            let gallery = res.data.gallery;
            let search = '';
            if(res.status == 200) {
                dispatch(authSigninSuccess(user, email, id));
                dispatch(galleryActions.galleryFetch(search))
            }
        })
        .catch(error => {
            // dispatch(authSigninFail());
            // redirect to login on fail
            console.log(error);
        });       
    }
};

export const authLoad = () => ({
    type: AUTH_LOAD
});
export const authLoadSuccess = () => ({
    type: AUTH_LOAD_SUCCESS
});
export const authLoadFail = () => ({
    type: AUTH_LOAD_FAIL
});
export const authSignin = () => ({
    type: AUTH_SIGNIN
});
export const authSigninSuccess = (user, email, id) => ({
    type: AUTH_SIGNIN_SUCCESS,
    user,
    email,
    id
});
export const authSigninFail = () => ({
    type: AUTH_SIGNIN_FAIL
});
export const authSignout = () => {
    return dispatch => {
        dispatch(authSignoutSuccess())
        axios({
            method: 'post',
            url: fetchUrl + 'logout',
        })
        .then(res => {
            console.log(res);
            if(res.status == 200) {
                dispatch(authSignoutSuccess());
                dispatch(showLogin());
            }
        })
        .catch(error => {
            dispatch(authSignupFail());
            // redirect to login on fail
            console.log(error);
        });       
    }
};
export const authSignoutSuccess = () => ({
    type: AUTH_SIGNOUT_SUCCESS
});
export const authSignoutFail = () => ({
    type: AUTH_SIGNOUT_FAIL
});
export const authSignup = () => ({
    type: AUTH_SIGNUP
});
export const authSignupSuccess = (username, password) => ({
    type: AUTH_SIGNUP_SUCCESS,
    username,
    password
});
export const authSignupFail = () => ({
    type: AUTH_SIGNUP_FAIL
});