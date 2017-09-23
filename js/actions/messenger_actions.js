'user strict';
import axios from 'axios';
let fetchUrl = 'http://localhost:5050/';
let userUrl = 'http://localhost:8080/';

// when message is complete and to emit
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const addMessage = (value) => ({
    type: ADD_MESSAGE,
    value
});
// while user is typing - needs a timeout?
export const TYPING_MESSAGE = 'TYPING_MESSAGE';
export const typingMessage = (username) => ({
    type: TYPING_MESSAGE,
    username
});
// when user stops typing
export const STOP_TYPING_MESSAGE = 'STOP_TYPING_MESSAGE';
export const stopTypingMessage = (username) => ({
    type: STOP_TYPING_MESSAGE,
    username
});
// add channel
export const ADD_CHANNEL = 'ADD_CHANNEL';
export const addChannel = (channel) => ({
    type: ADD_CHANNEL,
    channel
});
// change channel
export const CHANGE_CHANNEL = 'CHANGE_CHANNEL';
export const changeChannel = (channel) => ({
    type: CHANGE_CHANNEL,
    channel
});
// channel fetch loading
export const CHANNELS_LOADING = 'CHANNELS_LOADING';
export const channelsLoading = () => ({
    type: CHANNELS_LOADING
});
// channel fetch success
export const CHANNELS_SUCCESS = 'CHANNELS_SUCCESS';
export const channelsSuccess = (data) => ({
    type: CHANNELS_SUCCESS,
    data
});
// channel fetch fail
export const CHANNELS_FAIL = 'CHANNELS_FAIL';
export const channelsFail = (error) => ({
    type: CHANNELS_FAIL,
    error
});
// messages fetch loading
export const MESSAGES_LOADING = 'MESSAGES_LOADING';
export const messagesLoading = () => ({
    type: MESSAGES_LOADING
});
//  messages fetch success - which channel and data from that channel
export const MESSAGES_SUCCESS = 'MESSAGES_SUCCESS';
export const messagesSuccess = (data, channel) => ({
    type: MESSAGES_SUCCESS
});
export const MESSAGES_FAIL = 'MESSAGES_FAIL';
export const messagesFail = (error) => ({
    type: MESSAGES_FAIL,
    error
});
// async actions 
// fetch list of available channels  - user
export const fetchUserChannels = (username) => {
    return dispatch => {

    }
};
// fetch list of available channels - exhibits/ categories
export const fetchExhibitChannels = (exhibit) => {
    return dispatch => {

    }
};
//  message fetch
export const fetchMessages = (channel) => {
    return dispatch => {
        
    }
};
// create a new channel
export const createChannel = (channel) => {
    return dispatch => {

    }
};
// create a new message 
export const createMessage = (message) => {
    return dispatch => {

    }
};
