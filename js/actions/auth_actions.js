//user validation actions
export const CHECK_USER = 'CHECK_USER'; 
export const checkUser = (email, password) => {
    return dispatch => {
        dispatch(fetchUserRequest())
        console.log("checkUser Fired");
    }
};

export const ADD_USER = 'ADD_USER';
export const addUser = (email, password) => ({
    type: ADD_USER,
    email,
    password
});

export const ENTER_GALLERY = 'ENTER_GALLERY'; 
export const enterGallery = () => ({
    type: ENTER_GALLERY
});

export const FORM_UPDATE_VALUE = 'FORM_UPDATE_VALUE';
export const formUpdateValue = (value) => ({
    type: FORM_UPDATE_VALUE,
    value
});

export const FORM_RESET = 'FORM_RESET';
export const formReset = () => ({
    type: FORM_RESET
});

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const fetchUserRequest = () => ({
    type: FETCH_USER_REQUEST
});

export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const fetchSuccess = () => ({
    type: FETCH_SUCCESS
});