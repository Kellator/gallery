'user strict';
import axios from 'axios';
let fetchUrl = 'http://localhost:5050/';
let userUrl = 'http://localhost:8080/';
//GALLERY ACTIONS

export const LOAD_NEW_EXHIBIT_WORKSPACE ='LOAD_NEW_EXHIBIT_WORKSPACE';
export const loadAddNewExhibitSpace = () => ({
    type: LOAD_NEW_EXHIBIT_WORKSPACE
});

export const LOAD_CONFIRM_EXHIBIT = 'LOAD_CONFIRM_EXHIBIT';
export const loadConfirmExhibit = (values) => ({
    type: LOAD_CONFIRM_EXHIBIT,
    values
});
export const LOAD_CREATE_EXHIBIT = 'LOAD_CREATE_EXHIBIT';
export const loadCreateExhibit = () => ({
    type: LOAD_CREATE_EXHIBIT
});

//shares a specific exhibit via message
export const SHARE_EXHIBIT = 'SHARE_EXHIBIT';
export const shareExhibit = (exhibit, sendingUserID, receivingUserID) => ({
    type: SHARE_EXHIBIT,
    exhibit,
    sendingUserID,
    receivingUserID
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
                console.log(data);
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
        axios.get(fetchUrl + "gallery/exhibit/" + exhibit_id, {
            // params: {
            //     exhibit_id: exhibit_id
            // }
        })
        .then(res => {
            console.log(res);
            console.log(res.data);
            let data = res.data
            if(res.status == 200) {
                dispatch(exhibitFetchSuccess(data));
            }
        })
        .catch(error => {
            console.log(error);
        }); 
    }
}

// action creators for creating new exhibit document
export const NEW_EXHIBIT_LOADING = 'NEW_EXHIBIT_LOADING';
export const newExhibitLoading = () => ({
    type: NEW_EXHIBIT_LOADING
});

export const NEW_EXHIBIT_SUCCESS = 'NEW_EXHIBIT_SUCCESS';
export const newExhibitSuccess = (newExhibit) => ({
    type: NEW_EXHIBIT_SUCCESS,
    newExhibit
});

export const NEW_EXHIBIT_FAIL = 'NEW_EXHIBIT_FAIL';
export const newExhibitFail = (error) => ({
    type: NEW_EXHIBIT_FAIL,
    error
});
export const postNewExhibit = (data) => {
    console.log("post values: ");
    console.log(data);
    console.log("hello add new");   
    return dispatch => {
        dispatch(newExhibitLoading());
        axios.post(fetchUrl + 'gallery/exhibit/', data)
        .then(res => {
            console.log(res.data);
            let newExhibit = res.data;
            dispatch(newExhibitSuccess(newExhibit));
            if(res.status == 200) {
            }
        })
        .catch(error => {
            dispatch(newExhibitFail(error));
            console.log(error);
        }); 
    }
};
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

export const commentUpdate = (data) => {
    console.log(data.exhibit_id);
    console.log(data.user);
    console.log(data.text);
    let exhibit_id = data.exhibit_id;
    let user = data.user;
    let text = data.text;
    return dispatch => {
        dispatch(newCommentUploading());
        console.log("hello comment update");
        axios.post(fetchUrl + 'gallery/exhibit/comment/', data)
        .then(res => {
            console.log(res.data);
            let data = res.data;
            if(res.status == 200) {
                dispatch(newCommentUploadSuccess(data));
            }
        })
        .catch(error => {
            dispatch(newCommentUploadFail(error));
            console.log(error);
        }); 
    }
};
// actions for loading comments list for each exhibit
export const COMMENT_LOADING = 'COMMENT_LOADING';
export const commentLoading = () => ({
    type: COMMENT_LOADING
});
export const COMMENT_LOAD_SUCCESS = 'COMMENT_LOAD_SUCCESS';
export const commentLoadSuccess = () => ({
    type: COMMENT_LOAD_SUCCESS
});
export const COMMENT_LOAD_FAIL = 'COMMENT_LOAD_FAIL';
export const commentLoadFail =() => ({
    type: COMMENT_LOAD_FAIL
});

// actions for creating new comments for an exhibit
export const NEW_COMMENT_UPLOADING = 'NEW_COMMENT_UPLOADING';
export const newCommentUploading = () => ({
    type: NEW_COMMENT_UPLOADING
});
export const NEW_COMMENT_UPLOAD_SUCCESS = 'NEW_COMMENT_UPLOAD_SUCCESS';
export const newCommentUploadSuccess = (data) => ({
    type: NEW_COMMENT_UPLOAD_SUCCESS,
    data
});
export const NEW_COMMENT_UPLOAD_FAIL = 'NEW_COMMENT_UPLOAD_FAIL';
export const newCommentUploadFail = (error) => ({
    type: NEW_COMMENT_UPLOAD_FAIL,
    error
});
