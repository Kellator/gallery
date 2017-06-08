//landing page contains the log-in component and link to set up new user profile
import React from 'react';
import PropTypes from 'prop-types';
//separate local imports from dependencies


//declare propTypes prior to component

LoginBlock.propTypes = {

}

class LoginBlock extends React.Component {
    render() {
        return (
            <div className="">
                <GalleryLogo className=""></GalleryLogo>
                <LoginInput className=""></LoginInput>
                <SignUp className=""></SignUp>
            </div>
        );
    }
}