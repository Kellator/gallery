//landing page contains the log-in component and link to set up new user profile
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { dispatch } from 'react-redux';
//separate local imports from dependencies
import LoginBlock from './login_block';
import SignUpBlock from './sign_up_block';
import * as actions from '../../actions/index';
//declare propTypes prior to component

// LandingPage.propTypes = {

// }

class LandingPage extends React.Component {
    render() {
        let landingState = this.props.login
        if (landingState == false) {
            return <SignUpBlock log_in={this.props.onClickLogin}/>
        }
        return <LoginBlock sign_up={this.props.onClickSignup}/>
    }
}
//event handlers and mapDispatchToProps?
//onSubmitLogin should dispatch CHECK_USER

const mapStateToProps = (state, props) => ({
    login: state.validation.login
    // email: state.validation.user.email,
});
const mapDispatchToProps = (dispatch, ownProps) => {
    return { onClickSignup: () => { dispatch(actions.showSignup())},
    onClickLogin: () => { dispatch(actions.showLogin())}
    }
}
// const mapDispatchToProps = (dispatch, ownProps) => ({
//     actions: bindActionCreators(actions, dispatch)
// });

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);