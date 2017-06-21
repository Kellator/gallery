//landing page contains the log-in component and link to set up new user profile
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//separate local imports from dependencies
import LoginBlock from './login_block';
import SignUpBlock from './sign_up_block';
//declare propTypes prior to component

// LandingPage.propTypes = {

// }

// export default class LandingPage extends React.Component {
//     render() {
//         return (
//             <div>
//                 <LoginBlock  />
//             </div>
//         );
//     }
// }

class LandingPage extends React.Component {
    render() {
        console.log(this.props);
        console.log(this.props.login);
        let landingState = this.props.login
        if (landingState == false) {
            return <SignupBlock />
        }
        return <LoginBlock />
    }
}
//event handlers and mapDispatchToProps?
//onSubmitLogin should dispatch CHECK_USER

const mapStateToProps = (state, props) => ({
    login: state.validation.login
    // email: state.validation.user.email,
    // password: state.validation.user.password
})

export default connect(mapStateToProps)(LandingPage);