require('babel-polyfill');
import React from 'react';
import ReactDOM  from 'react-dom';
import { Provider } from 'react-redux';
//import store

import Routes from './Routes';

let store = "sample";
document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(
            <Provider >
                <Routes />
            </Provider>, 
        document.getElementById('app')
    )
);
