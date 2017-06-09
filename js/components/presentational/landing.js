//landing page contains the log-in component and link to set up new user profile
import React from 'react';
import PropTypes from 'prop-types';
//separate local imports from dependencies
import LoginBlock from './login_block';

//declare propTypes prior to component

// LandingPage.propTypes = {

// }

export default class LandingPage extends React.Component {
    render() {
        return (
            <div className="">
                <LoginBlock className="">
            </div>
        );
    }
}