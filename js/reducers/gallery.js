import * as action from '../actions/gallery_actions';

const initialState = {
    searching: false,
    loaded: false,
    gallerySearch: '',
    galleryExhibits: []
}
export default function gallery(state = initialState, action) {
    // console.log("gallery reducer: ") + action.type;
    // console.log(state);
    switch(action.type) {
        case 'GALLERY_SEARCH' :
            return {
                ...state,
                searching: true,
                gallerySearch: state.form.values.gallery_search_input
            };
        case 'SEARCH_GALLERY_SUCCESS' :
            return {
                ...state,
                searching: false,
                loaded: true
            }
        default :
            return state;
    };    
}