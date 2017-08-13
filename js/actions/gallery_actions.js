'user strict';
import axios from 'axios';
let fetchUrl = 'http://localhost:5050/';
let userUrl = 'http://localhost:8080/';
//GALLERY ACTIONS
//adds exhibit data to exhibit document
export const ADD_NEW_EXHIBIT = 'ADD_NEW_EXHIBIT';
export const addNewExhibit = (title, image, source, categories, userID) => ({
    type: ADD_NEW_EXHIBIT,
    title,
    image,
    source,
    categories,
    userID
});

//shares a specific exhibit via message
export const SHARE_EXHIBIT = 'SHARE_EXHIBIT';
export const shareExhibit = (exhibit, sendingUserID, receivingUserID) => ({
    type: SHARE_EXHIBIT,
    exhibit,
    sendingUserID,
    receivingUserID
});

//adds already existing exhibit to user wall
export const ADD_TO_WALL = 'ADD_TO_WALL';
export const addToWall = (exhibit, wall) => ({
    type: ADD_TO_WALL,
    exhibit,
    wall
});

//creates a new wall for user
export const ADD_NEW_WALL = 'ADD_NEW_WALL';
export const addNewWall = (title, categories) => ({
    type: ADD_NEW_WALL,
    title,
    categories
});


//UI ACTIONS - changes that occur to ui state tree
//landing page - login vs sign up
export const SHOW_LOGIN = 'SHOW_LOGIN';
export const showLogin = () => ({
    type: SHOW_LOGIN
});

export const SHOW_SIGNUP = 'SHOW_SIGNUP';
export const showSignup = () => {
    return {
        type: SHOW_SIGNUP
    };
};

//in user gallery on log in - nav with user menu, search bar, browse rail, and message rail
export const USER_MENU = 'USER_MENU';
export const userMenu = () => ({
    type: USER_MENU,
});

export const GALLERY_MENU = 'GALLERY_MENU';
export const galleryMenu = () => ({
    type: GALLERY_MENU,
});

export const TOGGLE_MENU = 'TOGGLE_MENU';
export const toggleMenu = (menu) => ({
    type: TOGGLE_MENU,
    menu
});
export const LOG_OUT = 'LOG_OUT';
export const logOut = () => ({
    type: LOG_OUT
});

//search 
export const SEARCH_GALLERY = 'SEARCH_GALLERY';
export const searchGallery = () => ({
    type: SEARCH_GALLERY
});
export const SEARCH_GALLERY_SUCCESS = 'SEARCH_GALLERY_SUCCESS';
export const searchGallerySuccess = (data) => ({
    type: SEARCH_GALLERY_SUCCESS,
    data
});
export const galleryFetch = () => {
    return dispatch => {
        dispatch(searchGallery())
        // axios({
        //     method: 'get',
        //     url: fetchUrl + 'gallery'
        // })
        axios.get(fetchUrl + "gallery")
        .then(res => {
            if(res.status == 200) {
                dispatch(searchGallerySuccess(data));
            }
        })
        .catch(error => {
            console.log(error);
        });       
    }
};
//shows selected exhibit
export const SHOW_EXHIBIT = 'SHOW_EXHIBIT';
export const showExhibit = (exhibit) => ({
    type: SHOW_EXHIBIT,
    exhibit
});

//shows selected user wall
export const SHOW_USER_WALL = 'SHOW_USER_WALL';
export const showUserWall = (userID, wall) => ({
    type: SHOW_USER_WALL,
    userID,
    wall
});

//shows selected user gallery
export const SHOW_USER_GALLERY = 'SHOW_USER_GALLERY';
export const showUserGallery = (userID, gallery) => ({
    type: SHOW_USER_GALLERY,
    userID,
    gallery
});

//shows selected wall 
export const SHOW_WALL = 'SHOW_WALL';
export const showWall = (wall) => ({
    type: SHOW_WALL,
    wall
});

//shows all exhibits in app
export const SHOW_GALLERY = 'SHOW_GALLERY';
export const showGallery = (gallery) => ({
    type: SHOW_GALLERY,
    gallery
});


//thunks?
//retrieve documents from monogo - exhibits, walls, user gallery etc