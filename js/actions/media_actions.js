'use strict'

export const UPLOAD_SUCCESS = 'UPLOAD_SUCCESS';
export const uploadSuccess = (data) => {
    type: 'UPLOAD_SUCCESS',
    data
}