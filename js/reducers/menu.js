import * as action from '../actions/index';
console.log(action);

const initialState = {
    menuActive: false
};
const menu = ( state = {}, action ) => {
    switch(action.type) {
        case 'TOGGLE_MENU':
            return Object.assign({}, state, {
                menuActive: !state.menuActive,
                menu: state.menu
            });
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