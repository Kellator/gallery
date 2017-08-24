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
        case 'SHOW_EXHIBIT' :
            return {
                ...state,
                view : {
                    galleryView: true,
                    exhibitView: true,
                    createExhibitView: false                    
                },
                exhibitSearching:false,
                exhibitLoaded: true,
                exhibit: {
                    categories: action.data.categories,
                    collaborators: action.data.collaborators,
                    comments:  action.data.comments,
                    createdAt:  action.data.createdAt,
                    creator:  action.data.creator,
                    description:  action.data.description,
                    exhibitType:  action.data.exhibitType,
                    image:  action.data.image,
                    location:  action.data.location,
                    status:  action.data.status,
                    title:  action.data.title,
                    updatedAt:  action.data.updatedAt,
                    _id:  action.data._id
                }
            };
        case 'COMMENT_IN_PROGRESS' :
            return {
                ...state,
                commentLogComplete: false,
                commentLogInProgress: true
            };
        case 'COMMENT_COMPLETE' :
            return {
                ...state,
                commentLogComplete: true,
                commentLogInProgress: false
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
            }
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
        default :
            return state;
    };    
}