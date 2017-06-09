//text with link to sign up for new users 
import React from 'react';
import PropTypes from 'prop-types';
//separate local imports from dependencies


//declare propTypes prior to component

SignUp.propTypes = {

}

class SignUp extends React.Component {
    render() {
        return (
            <p className="new_user_signup">New to Gallery?  Sign up <a href="" >here!</a></p>
        );
    }
}