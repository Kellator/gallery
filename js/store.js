import { compose, createStore, applyMiddleware } from 'redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { syncHistoryWithStore } from 'react-router-redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import reducer from './reducers/index';

const middleware = [
    logger,
    thunk
];

const enhancers = compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

let store = createStore(
    reducer,
    enhancers
)
export const history = syncHistoryWithStore(createBrowserHistory(), store);
export { store };