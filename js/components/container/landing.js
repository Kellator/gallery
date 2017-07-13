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
//declare propTypes prior to component

// LandingPage.propTypes = {

// }

class LandingPage extends React.Component {
    render() {
        let landing;
        let landingState = this.props.login;
        console.log(landingState);
        if (landingState == true) {
            landing = <LoginBlock sign_up={this.props.onClickSignup} onSubmit={this.props.loginSubmit}/>
        } 
        else {
            landing = <SignUpBlock log_in={this.props.onClickLogin} onSubmit={this.props.signupSubmit}/>
        }
        return (
            <div className="landing_display">
                {landing}
            </div>
        )
    }
}
//event handlers and mapDispatchToProps?
//onSubmitLogin should dispatch CHECK_USER

const mapStateToProps = (state, props) => ({
    login: state.validation.login
});
const mapDispatchToProps = (dispatch, ownProps) => {
    return { onClickSignup: () => { dispatch(actions.showSignup())},
    onClickLogin: () => { dispatch(actions.showLogin())},
    loginSubmit: () => { 
        event.preventDefault();
        console.log("Hello submit worked")},
    signupSubmit: () => { 
        event.preventDefault();
        console.log("Howdy, sign up input worked")}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);