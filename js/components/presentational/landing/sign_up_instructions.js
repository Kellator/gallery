//text for instructions on signing up for app
import React from 'react';
import PropTypes from 'prop-types';
//separate local imports from dependencies


//declare propTypes prior to component

// SignUpInstructions.propTypes = {

// }

export default class SignUpInstructions extends React.Component {
    render() {
        return (
            <div className="su_instructions">
                <p>Signing up for the Gallery is as simple as entering in an email and password below!</p>
                <p>Passwords must be at least 8 characters long</p>
            </div>
        );
    }
}

