import * as action from '../actions/media_actions';

const initialState = {
    uploaded: false,
    uploading: false,
    data: []
}

export default function files(state = initialState, action) {
    switch(action.type) {
        case 'UPLOADING' :
            return {
                ...state,
                uploading: true
            };
        case 'UPLOAD_SUCCESS' :
            return {
                ...state,
                uploading: false,
                uploaded: true
            };
        case 'UPLOAD_FAIL' :
            return {
                ...state,
                uploading: false,
                uploaded: false,
                error: action.error
            };
        default :
            return state;
    };
}