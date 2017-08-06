import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import LogIn from './login-container';
import SignUp from './signup-container';
import Dashboard from './dashboard';
import Welcome from './welcome';

export default class Main extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Welcome}/>
                <Route exact path='/login' component={LogIn}/>
                <Route exact path='/signup' component={SignUp}/>
                 <Route path='/gallery/:userId' component={Dashboard}/> 
            </Switch>
        )
    }
}