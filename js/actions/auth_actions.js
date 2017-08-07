import axios from 'axios';
import cookie from 'react-cookies';
let fetchUrl = 'http://localhost:5050/';
let userUrl = 'http://localhost:8080/';

//user validation actions
export const CHECK_USER = 'CHECK_USER'; 
export const checkUser = (username, email, password) => {
    return dispatch => {
        dispatch(authLoad())
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
            console.log(res);
            console.log(res.data.user);
            let user = res.data.user;
            dispatch(receiveAuth(user));
            axios({
                method: 'post',
                url: userUrl + ':' + user,
            })
        })
        .catch(error => {
            console.log(error);
        });
        console.log("AUTHORIZATION COMPLETED");
        console.log("Welcome to the Gallery " + username + "!");        
    }
};

export const ADD_USER = 'ADD_USER';
export const addUser = (username, email, password) => {
    return dispatch => {
        axios.post(fetchUrl + 'register', {
            username: username,
            email: email,
            password: password
        })
        .then(res => {
            console.log(res);
            dispatch(authSignin)
            // welcome screen? or log in
        })
        .catch(error => {
            console.log(error);
        });
        console.log("REGISTRATION COMPLETED");
    }
};

export const AUTH_LOAD = 'AUTH_LOAD';
export const authLoad = () => ({
    type: AUTH_LOAD
});

export const AUTH_LOAD_SUCCESS = 'AUTH_LOAD_SUCCESS';
export const receiveAuth = () => {
    const user =cookie.load('username');
    return {
        type: AUTH_LOAD_SUCCESS,
        user
    }
}

export const AUTH_SIGNIN = 'AUTH_SIGNIN';
export const authSignin = () => ({
    type: AUTH_SIGNIN
})