'use strict'

export const UPLOADING = 'UPLOADING';
export const uploading = (data) => {
    type: 'UPLOADING',
    data
}
export const UPLOAD_SUCCESS = 'UPLOAD_SUCCESS';
export const uploadSuccess = (data) => {
    type: 'UPLOAD_SUCCESS',
    data
}
export const UPLOAD_FAIL = 'UPLOAD_FAIL';
export const uplaodFail = (error) => {
    type: 'UPLOAD_FAIL',
    error
}

export const RETRIEVING_FILE = 'RETRIEVING_FILE';
export const retrievingFile = () => {
    type: 'RETRIEVING_FILE'
}
export const RETRIEVE_SUCCESS = 'RETRIEVE_SUCCESS';
export const retrieveSuccess = (data) => {
    type: 'RETRIEVE_SUCCESS',
    data
}
export const RETRIEVE_FAIL = 'RETRIEVE_FAIL';
export const retrieveFail = (error) => {
    type: 'RETRIEVE_FAIL',
    error
}

export const fileFetch = (file_id) => {
    return dispatch => {
        dispatch(retrievingFile())
        axios.get(fetchUrl + "files/", {
            params: {
                file_id: file_id
            }
        })
        .then(res => {
            console.log(res);
            let data = res.data
            if(res.status == 200) {
                console.log("You have fetched a file.  Good Job!");
                dispatch(retrieveSuccess(data));
            }
        })
        .catch(error => {
            dispatch(retrieveFail(error));
            console.log(error);
        });
    }
};