const initialState = {
    searching: false,
    loading: false,
    loaded: false
}
export default function comments(state = initialState, action) {
    switch(action.type) {
        case 'NEW_COMMENT_UPLOADING' :
        return {
            ...state,
            loading: true,
            loaded: false,
        };
        case 'NEW_COMMENT_UPLOAD_SUCCESS' :
        return {
            ...state,
            loading: false,
            loaded: true, 
            data: action.data 
        };
        case 'NEW_COMMENT_UPLOAD_FAIL' :
        return {
            ...state,
            loading: false,
            loaded: false,
            error: action.error
        };
        default :
        return state;
    }
}
