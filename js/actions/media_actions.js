'use strict'

export const UPLOADING = 'UPLOADING';
export const uploading = () => {
    type: 'UPLOADING'
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
// to retrieve file (image) from Exhibit for collaborative efforts
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
// to upload file (image) to Comment as response

//to upload file (image) to Exhibit
export const filePost = (data) => {
    return dispatch => {
        dispatch(uploading());
        axios.post(fetchUrl + "files/")
        .then(res => {
            console.log(res.data);
            let mediaFile = res.data;
            dispatch(uploadSuccess(mediaFile));
            if(res.status == 200) {
                console.log("successfully uploaded media file");
            }
        })
        .catch(error => {
            dispatch(uploadFail(error));
            console.log(error);
        });
    }
};