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

class LogIn extends React.Component {
    render() {
        return (
            <div className="log_in">
                <LoginBlock sign_up={this.props.onClickSignup} onSubmit={this.props.loginSubmit}/>
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
    loginSubmit: (values) => { 
        event.preventDefault();
        let username = values.username;
        let email = values.email;
        let password = values.password;
        console.log('landing login : ' + username, email, password)
        dispatch(auth.checkUser(username, email, password))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);