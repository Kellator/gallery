import * as action from '../actions/gallery_actions';

const initialState = {
    searching: false,
    loaded: false,
    gallerySearch: '',
    galleryView: true,
    exhibitView: false,
    galleryExhibits: []
}
export default function gallery(state = initialState, action) {
    switch(action.type) {
        case 'SEARCH_GALLERY' :
            return {
                ...state,
                searching: true,
                gallerySearch: action.search
            };
        case 'SEARCH_GALLERY_SUCCESS' :
            return {
                ...state,
                searching: false,
                loaded: true,
                galleryExhibits: action.data
            };
        case 'SEARCH_GALLERY_FAIL' :
            return {
                ...state,
                searching: false,
                loaded: false,
                error: action.error
            };
        case 'SEARCH_EXHIBIT' :
        return {
            ...state,
            exhibitSearching: true,
            exhibitLoaded: false,
        }
        case 'SHOW_EXHIBIT' :
        return {
            ...state,
            galleryView: false,
            exhibitView: true,
            exhibitSearching:false,
            exhibitLoaded: true,
            exhibit: action.data
        };
        default :
            return state;
    };    
}