require('babel-polyfill');
import React from 'react';
import ReactDOM  from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';

import Routes from './Routes';

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(
            <Provider store={store}>
                <Routes />
            </Provider>, 
        document.getElementById('app')
    )
);
