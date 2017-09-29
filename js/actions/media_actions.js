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