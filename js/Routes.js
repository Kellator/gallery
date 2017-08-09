import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import App from './components/container/app';


export default class Routes extends React.Component {
    render() {
        return (
            <Router history={ history }>
                <App />
            </Router>
        )
    }
}

