//div that contains the logo, login input, and link to sign up for first time visitors
import React from 'react';
import PropTypes from 'prop-types';
//separate local imports from dependencies
import GalleryLogo from './gallery_logo';
import SignUpInput from './sign_up_input';
import SignUpInstructions from './sign_up_instructions';
import ExistingUser from './existing_user';
//declare propTypes prior to component

// SignUpBlock.propTypes = {

// }

export default class SignUpBlock extends React.Component {
    render() {
        return (
            <div className="">
                <GalleryLogo className=""></GalleryLogo>
                <SignUpInstructions className=""></SignUpInstructions>
                <SignUpInput className="" onSubmit={this.props.onSubmit}></SignUpInput>
                <ExistingUser className="" log_in={this.props.log_in}></ExistingUser>
            </div>
        );
    }
}