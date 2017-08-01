import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import LandingPage from './landing';
import Dashboard from './dashboard';
import Welcome from './welcome';

export default class Main extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Welcome}/>
                {/* <Route path='/gallery/:userId' component={Dashboard}/> */}
            </Switch>
            
        )
    }
}