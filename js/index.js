require('babel-polyfill');
import React from 'react';
import ReactDOM  from 'react-dom';

import LandingPage from './components/presentational/landing';

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(<LandingPage />, document.getElementById('app'))
);
