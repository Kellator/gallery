import * as action from '../actions/gallery_actions';
console.log(action);
const initialState = {
    searching: false,
    loaded: false,
    gallerySearch: '',
    galleryExhibits: []
}
export default function gallery(state = initialState, action) {
    switch(action.type) {
        case 'SEARCH_GALLERY' :
            return {
                ...state,
                searching: true,
                gallerySearch: action.gallery
            };
        case 'SEARCH_GALLERY_SUCCESS' :
            return {
                ...state,
                searching: false,
                loaded: true
            };
        case 'SEARCH_GALLERY_FAIL' :
            return {
                ...state,
                searching: false,
                loaded: false,
                error: action.error
            }
        default :
            return state;
    };    
}