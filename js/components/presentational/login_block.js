//div that contains the logo, login input, and link to sign up for first time visitors
import React from 'react';
import PropTypes from 'prop-types';
//separate local imports from dependencies
import GalleryLogo from './gallery_logo';
import LoginInput from './login_input';
import SignUp from './sign_up';
//declare propTypes prior to component

// LoginBlock.propTypes = {

// }

export default class LoginBlock extends React.Component {
    render() {
        console.log("login block");
        console.log(this.props);
        return (
            <div className="">
                <GalleryLogo className=""></GalleryLogo>
                <LoginInput className=""
                    onChange={this.props.onChange}
                    formUpdate={this.props.formUpdate}>
                </LoginInput>
                <SignUp className="" sign_up={this.props.sign_up}></SignUp>
            </div>
        );
    }
}