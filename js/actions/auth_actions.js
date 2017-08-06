import axios from 'axios';
let fetchUrl = 'http://localhost:5050/';
let userUrl = 'http://localhost:8080/';

//user validation actions
export const CHECK_USER = 'CHECK_USER'; 
export const checkUser = (username, email, password) => {
    return dispatch => {
        dispatch(fetchUserRequest())
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
            dispatch(enterGallery());
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
            // welcome screen?
        })
        .catch(error => {
            console.log(error);
        });
        console.log("REGISTRATION COMPLETED");
    }
};

export const ENTER_GALLERY = 'ENTER_GALLERY'; 
export const enterGallery = () => ({
    type: ENTER_GALLERY
});

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const fetchUserRequest = () => ({
    type: FETCH_USER_REQUEST
});

export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const fetchSuccess = () => ({
    type: FETCH_SUCCESS
});