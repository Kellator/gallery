import * as action from '../actions/gallery_actions';

const initialState = {
    searching: false,
    loaded: false,
    gallerySearch: '',
    view: {
        galleryView: true,
        exhibitView: false,
        createWorkspaceView: false,
        createExhibitView: false,
        confirmExhibitView: false
    },
    galleryExhibits: []
}
export default function gallery(state = initialState, action) {
    switch(action.type) {
        case 'SEARCH_GALLERY' :
            return {
                ...state,
                searching: true,
                gallerySearch: action.search,
                view: {
                    galleryView: true,
                    exhibitView: false,
                    createWorkspaceView: false,
                    createExhibitView: false,
                    confirmExhibitView: false              
                },
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
                exhibit_id: action.exhibit_id
            };
        case 'EXHIBIT_FETCHING' :
            return {
                ...state,
                exhibitStatus: {
                    loading: true,
                    loaded: false
                }
            };
        case 'EXHIBIT_FETCH_SUCCESS' :
            return {
                ...state,
                exhibitStatus: {
                    loading: false,
                    loaded: true
                },
                view : {
                    galleryView: true,
                    exhibitView: true,
                    createExhibitView: false                    
                },
                exhibit: action.data
            };
        case 'EXHIBIT_FETCH_FAIL' :
            return {
                ...state,
                exhibitStatus: {
                    loading: false,
                    loaded: false
                },
                error: action.error
            };
        case 'LOAD_NEW_EXHIBIT_WORKSPACE' :
            return {
                ...state,
                view: {
                    galleryView: false,
                    exhibitView: false,
                    createWorkspaceView: true
                }
            };
        case 'LOAD_CREATE_EXHIBIT' :
            return {
                ...state,
                view: {
                    galleryView: false,
                    exhibitView: false,
                    createWorkspaceView: true,
                    createExhibitView: true,
                    confirmExhibitView: false              
                },
            };
        case 'LOAD_CONFIRM_EXHIBIT' :
            return {
                ...state,
                view: {
                    galleryView: false,
                    exhibitView: false,
                    createWorkspaceView: true,
                    createExhibitView: false,
                    confirmExhibitView: true               
                },
                exhibitCard: action.values
            };
        case 'NEW_EXHIBIT_LOADING' :
            return {
                ...state,
                newExhibitStatus: {
                    loading: true
                }
            };
        case 'NEW_EXHIBIT_SUCCESS' :
            return {
                ...state,
                newExhibitStatus: {
                    loading: false,
                    loaded: true
                },
                data: action.data
            };
        case 'NEW_EXHIBIT_FAIL' :
            return {
                ...state,
                newExhibitStatus: {
                    loading: false,
                    loaded: false,
                    error: action.error
                }
            };

        case 'COMMENT_FETCHING' :
            return {
                ...state,
                commentStatus: {
                    loading: true,
                    loaded: false
                }
            };
        case 'COMMENT_FETCH_SUCCESS' :
        return {
            ...state,
            commentStatus: {
                loading: false,
                loaded: true
            },
            comments: action.commentData
            };
        case 'COMMENT_FETCH_FAIL' :
        return {
            ...state,
            commentStatus: {
                loading: false,
                loaded: false,
                error: action.error
            }
        };
        default :
            return state;
    };    
}