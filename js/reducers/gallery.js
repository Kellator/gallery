import * as action from '../actions/gallery_actions';

const initialState = {
    searching: false,
    loaded: false,
    user : state.auth.user.username,
    galleryDisplay: []
}
export default function gallery(state = initialState, action) {
    console.log("gallery reducer: ") + action;
    console.log(state);
    switch(action.type) {
        case 'GALLERY_SEARCH' :
            return {
                ...state,
                searching: true
            };
        default :
            return state;
    };    
}