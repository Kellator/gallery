import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { dispatch } from 'react-redux';
import { connect } from 'react-redux';
import { Field, reduxForm, initialize } from 'redux-form';
//separate local imports from dependencies;
import Messenger from '../presentational/messenger_rail';
import BrowserRail from '../presentational/browser_rail';
import NavBar from '../container/nav_rail';
import Gallery from '../container/gallery';
import * as actions from '../../actions/index';
//declare propTypes prior to component

// GalleryApp.propTypes = {

// }

//user state to block access?  if authorized: true render component else redirect to login page
//need state to remove welcome message and display only the 3 components (navBar, BrowserView, MessengerRail)

class Dashboard extends React.Component {
    render() {
        let username = this.props.username
        return (
            <div>
                <NavBar onSubmit={this.props.onSearchSubmit}/>
                <p>Welcome to the Gallery, {username}!</p>
                <Gallery />
            </div>
        )
    }
}
//comments in map are examples - must be removed
const mapStateToProps = (state, props) => ({
    // login: state.validation.login
    username: state.auth.user.username,
    email: state.auth.user.email,
    id: state.auth.user.id
});
const mapDispatchToProps = (dispatch, ownProps) => {
    return { onSearchSubmit: (value) => {
        event.preventDefault();
        let newValue = value.gallery_search_input;
        console.log(newValue);
        dispatch(actions.searchGallery(newValue))},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);