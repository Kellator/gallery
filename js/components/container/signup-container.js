//landing page contains the log-in component and link to set up new user profile
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { dispatch } from 'react-redux';
import { Field, reduxForm, initialize } from 'redux-form';

//separate local imports from dependencies
import LoginBlock from '../presentational/landing/login_block';
import SignUpBlock from '../presentational/landing/sign_up_block';
import * as actions from '../../actions/index';
console.log(actions);
const auth = actions.AuthActions;
const gal = actions.GalleryActions;
//declare propTypes prior to component

// LandingPage.propTypes = {

// }

class SignUp extends React.Component {
    render() {
        return (
            <div className="sign_up">
                <SignUpBlock log_in={this.props.onClickLogin} onSubmit={this.props.signupSubmit}/>
            </div>
        )
    }
}
//event handlers and mapDispatchToProps?
//onSubmitLogin should dispatch CHECK_USER

const mapStateToProps = (state, props) => ({
    login: state.validation.userState.login
});
const mapDispatchToProps = (dispatch, ownProps) => {
    return { onClickSignup: () => { dispatch(gal.showSignup())},
    onClickLogin: () => { dispatch(gal.showLogin())},
    signupSubmit: (values) => { 
        event.preventDefault();
        let username = values.username;
        let email = values.email;
        let password = values.password;
        console.log('landing submit :  ' + username, email, password);
        dispatch(auth.addUser(username, email, password));
        console.log("Howdy, sign up input worked")}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);