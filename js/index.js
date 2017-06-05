require('babel-polyfill');
import React from 'react';
import ReactDOM  from 'react-dom';

import Initial from './components/initial';

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(<Initial />, document.getElementById('app'))
);
