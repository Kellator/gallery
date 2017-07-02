import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { dispatch } from 'react-redux';
import { connect } from 'react-redux';
import { Field, reduxForm, initialize } from 'redux-form';
//separate local imports from dependencies;
import Messenger from '../presentational/messenger_rail';
import BrowserRail from '../presentational/browser_rail';
import NavBar from '../presentational/nav_rail';
//declare propTypes prior to component

// GalleryApp.propTypes = {

// }

//user state to block access?  if authorized: true render component else redirect to login page

class GalleryApp extends React.Component {
    render() {
        let userName = this.props.username;
        let text = userName
        return (
            <div>
                <p>Welcome to the Gallery, {text}!</p>
            </div>
        )
    }
}
//comments in map are examples - must be removed
const mapStateToProps = (state, props) => ({
    // login: state.validation.login
    username: "Betty"
});
const mapDispatchToProps = (dispatch, ownProps) => {
    // return { onClickSignup: () => { dispatch(actions.showSignup())},
    // }
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryApp);