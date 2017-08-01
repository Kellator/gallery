import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import LandingPage from './landing';

export default class Main extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={LandingPage}></Route>
            </Switch>
            
        )
    }
}