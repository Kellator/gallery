//div that contains the logo, login input, and link to sign up for first time visitors
import React from 'react';
import PropTypes from 'prop-types';
//separate local imports from dependencies
import GalleryLogo from './gallery_logo';
import LoginForm from './login_form';
import SignUpText from './sign_up_text';
//declare propTypes prior to component

// LoginBlock.propTypes = {

// }
class LoginBlock extends React.Component {
    render() {
        return (
            <div className="">
                <GalleryLogo className=""></GalleryLogo>
                <h1>Log in to the Gallery</h1>
                <LoginForm className="" onSubmit={this.props.onSubmit}></LoginForm>
                <SignUpText className="" sign_up={this.props.sign_up}></SignUpText>
            </div>
        );
    }
}
export default LoginBlock;