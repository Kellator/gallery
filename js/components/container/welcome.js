import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { dispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions/index';

const auth = actions.AuthActions;
const gal = actions.GalleryActions;
// text as prop to define what to display (Welcome to the Gallery or Now Exiting the Gallery etc)
class Welcome extends React.Component {
    render() {
        let text;
        if (this.props.text == true) {
            text = "Welcome to the Gallery; a collaborative environment for your passion."
        }
        else {
            text = "It looks like you haven't signed up with us yet.  Sign up to be a part of the Gallery Community."           
        }
        return (
            <div>
                <h1>{text}</h1>
                <div>
                    <h3>Already a member of the Gallery?</h3>
                    <Link to='/login' onClick={this.props.onClickLogin}>Log In to the Gallery</Link>
                </div>
                <div>
                    <h3>New to the Gallery?</h3>
                    <Link to='/signup' onClick={this.props.onClickSignup}>Sign up for the Gallery</Link>
                </div>
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