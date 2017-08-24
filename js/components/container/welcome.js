import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { dispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions/index';
import GalleryLogo from '../presentational/landing/gallery_logo';
import LogIn from './login-container';

const auth = actions.AuthActions;
const gal = actions.GalleryActions;
// text as prop to define what to display (Welcome to the Gallery or Now Exiting the Gallery etc)
class Welcome extends React.Component {
    render() {
        return (
            <div>
                <LogIn />
            </div>

        )
    }
}
const mapStateToProps = (state, props) => ({
    login: state.signingIn,
    text: state.auth.text
});
const mapDispatchToProps = (dispatch, ownProps) => {
    return { onClickSignup: () => { dispatch(gal.showSignup())},
    onClickLogin: () => { dispatch(gal.showLogin())}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Welcome);