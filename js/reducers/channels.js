import * as action from '../actions/messenger_actions';

const initialState = {
    loaded: false,
    channel: main,
    data: []
};

export default function channels(state = intialState, action) {
    switch(action.type) {
        case 'ADD_CHANNEL' :
            if (state.data.filter(channel => channel.name = action.channel.name).length !== 0) {
                return state;
            }
            return {
                ...state,
                data: [...state.data, action.channel]
            };
        case 'CHANGE_CHANNEL' :
            if (state.data.filter(channel => channel.name = action.channel.name).length !== 0) {
                return state;
            }
            return {
                ...state,
                data: [...state.data, action.channel]
            };
        case 'CHANNELS_LOADING' :
            return {
                loading: true
            };
        case 'CHANNELS_SUCCESS' :
            return {
                ...state,
                loading: false,
                loaded: true,
                data: [...state.data, ...action.data]
            };
        case 'CHANNELS_FAIL' :
            return {
                loading: false,
                loaded: false,
                error: action.error,
                data: [...state.data]
            };
        case 'AUTH_SIGNOUT_SUCCESS':
            return {
                loaded: false,
                data: []
            };
        default: return state;
    }
}