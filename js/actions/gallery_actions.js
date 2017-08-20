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
export const searchGallery = (search) => ({
    type: SEARCH_GALLERY,
    search
});
export const SEARCH_GALLERY_SUCCESS = 'SEARCH_GALLERY_SUCCESS';
export const searchGallerySuccess = (data) => ({
    type: SEARCH_GALLERY_SUCCESS,
    data
});
export const galleryFetch = (search) => {
    return dispatch => {
        dispatch(searchGallery(search))
        axios.get(fetchUrl + "gallery", {
            params: {
                term: search
            }
        })
        .then(res => {
            console.log(res);
            console.log(res.data);
            let data = res.data
            if(res.status == 200) {
                dispatch(searchGallerySuccess(data));
            }
        })
        .catch(error => {
            console.log(error);
        });       
    }
};
export const exhibitFetch = (exhibit_id) => {
    console.log(exhibit_id);
    return dispatch => {
        dispatch(searchExhibit(exhibit_id))
        axios({
            method: 'get',
            url: fetchUrl + 'exhibit',
            params: {
                exhibit_id: exhibit_id
            }
        })
        .then(res => {
            console.log(res);
            console.log(res.data);
            let data = res.data
            if(res.status == 200) {
                dispatch(exhibitFetchSuccess(data));
            }
        })
    }
}
export const commentUpdate = (exhibit_id, comment) => {
    console.log(comment);
    console.log(exhibit_id);
    return dispatch => {
        dispatch(commentInProgress(comment))
        axios({
            method: 'put',
            url: fetch + 'exhibit',
            params: {
                exhibit_id: exhibit_id,
                comment: comment
            }
        })
    }
  }
export const SEARCH_EXHIBIT = 'SEARCH_EXHIBIT';
export const searchExhibit = (exhibit_id) => ({
    type: SEARCH_EXHIBIT,
    exhibit_id
});
//shows selected exhibit
export const SHOW_EXHIBIT = 'SHOW_EXHIBIT';
export const showExhibit = (data) => ({
    type: SHOW_EXHIBIT,
    data
});

export const EXHIBIT_FETCH_SUCCESS = 'EXHIBIT_FETCH_SUCCESS';
export const exhibitFetchSuccess = (data) => ({
    type: EXHIBIT_FETCH_SUCCESS,
    data
});

//shows selected user gallery
export const SHOW_USER_GALLERY = 'SHOW_USER_GALLERY';
export const showUserGallery = (userID, gallery) => ({
    type: SHOW_USER_GALLERY,
    userID,
    gallery
});


//shows all exhibits in app
export const SHOW_GALLERY = 'SHOW_GALLERY';
export const showGallery = (gallery) => ({
    type: SHOW_GALLERY,
    gallery
});



export const COMMENT_COMPLETE = 'COMMENT_COMPLETE';
export const commentComplete = (comment) => ({
    type: LOG_COMMENT,
    comment
});