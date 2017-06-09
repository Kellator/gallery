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
            <p className="su_instructions">Signing up for the Gallery is as simple as entering in an email and password below!</p>
        );
    }
}

