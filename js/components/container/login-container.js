//landing page contains the log-in component and link to set up new user profile
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { dispatch } from 'react-redux';
import { Field, reduxForm, initialize } from 'redux-form';
import { Redirect } from 'react-router';
//separate local imports from dependencies
import LoginBlock from '../presentational/landing/login_block';
import SignUpBlock from '../presentational/landing/sign_up_block';
import {showSignup, showLogin} from '../../actions/index';
import * as authActions from '../../actions/auth_actions';
//declare propTypes prior to component

// LandingPage.propTypes = {

// }
class LogIn extends React.Component {

    render() {
        let authStatus = this.props.authorized;
        let comp;
        if(authStatus == true) {
            return <Redirect push to='/user' />
        }
        return (
            <div className="log_in">
                <LoginBlock sign_up={this.props.onClickSignup} onSubmit={this.props.loginSubmit}/>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    login: state.form.login,
    authorized: state.auth.authorized
});
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    onClickSignup: () => { 
        console.log("signup");
        dispatch(showSignup())},
    onClickLogin: () => { 
        console.log("login");
        dispatch(showLogin())},
    loginSubmit: (values) => { 
        event.preventDefault();
        let username = values.username;
        let email = values.email;
        let password = values.password;
        dispatch(authActions.checkUser(username, email, password))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);