//text with link to sign up for new users 
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//separate local imports from dependencies


//declare propTypes prior to component

// SignUp.propTypes = {

// }

export default class SignUpText extends React.Component {   
    render() {
        return (
            <p className="new_user_signup">New to Gallery?  <Link to='/signup' onClick={this.props.onClick}>Click to sign up.</Link></p>
        );
    }
}