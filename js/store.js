import { createStore, applyMiddleware } from 'redux';
import createBrowserHistory from 'history/createBrowserHistory';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers/index';

const middleware = [
    logger(),
    thunk
];

const enhancers = compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f  
);

export const intialState = {
    authorized: false
};

let store = createStore(
    reducer,
    initialState,
    enhancers
)

export { store };