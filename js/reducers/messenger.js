import * as action from '../actions/messenger_actions';

intialState = {
    loaded: false,
    data: []
}

export default function messenger(state = initialState, action) {
    switch(action.type) {
        case 'ADD_MESSAGE' :
            return {
                ...state,
                data: [
                    ...state.data,
                    action.message
                ]
            };
        case 'MESSAGE_LOADING' :
            return {
                loading: true
            };
        case 'MESSAGE_SUCCESS' :
            return {
                loading: false,
                loaded: true,

            };
        case 'MESSAGE_FAIL' :
            return {
                loading: false,
                loaded: false,
                error: action.error
            };
        default: return state;
    }
}