//text with link to login page
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//separate local imports from dependencies


//declare propTypes prior to component

// ExistingUser.propTypes = {

// }

export default class ExistingUser extends React.Component {
    render() {
        return (
            <p className="existing_user_line">Already a part of the Gallery? <Link to='/login' onClick={this.props.onClick}>Log In to the Gallery</Link></p>
        );
    }
}