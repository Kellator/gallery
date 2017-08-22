import * as action from '../actions/index';
console.log(action);

const initialState = {
    userMenu: {
        isOpen: false
    },
    galleryMenu: {
        isOpen: false
    }
};
const menu = ( state = initialState, action ) => {
    switch(action.type) {
        case 'TOGGLE_MENU':
            return {
                ...state,
                userMenu: {
                    isOpen: !state.isOpen
                }
            };
        case 'USER_MENU':
            return Object.assign({}, state, {
                menu: "user_menu"  
            });
        case 'GALLERY_MENU':
            return Object.assign({}, state, {
                menu: "gallery_menu"
            });
        default: return state;
    }
};
export default menu;