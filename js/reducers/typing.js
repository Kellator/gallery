import * as action from '../actions/messenger_actions';
const initialState = [];

export default function typers(state = intialState, action) {
    switch(action.type) {
        case 'TYPING_MESSAGE' :
        if (state.indexOf(action.username) === -1) {
            return [
                ...state,
                action.username
            ];
        }
        return state;
        case 'STOP_TYPING_MESSAGE' :
            return state.filter(user => 
            user !== action.username
        );
        default:
            return state;
    }
}