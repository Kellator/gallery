//user validation actions
export const CHECK_USER = 'CHECK_USER'; 
export const checkUser = (email, password) => ({
    type: CHECK_USER,
    email,
    password
});

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