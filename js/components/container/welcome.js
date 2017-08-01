import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { dispatch } from 'react-redux';
import * as actions from '../../actions/index';
console.log(actions);
const auth = actions.AuthActions;
const gal = actions.GalleryActions;
// text as prop to define what to display (Welcome to the Gallery or Now Exiting the Gallery etc)
class Welcome extends React.Component {
    render() {
        let text = this.props.text;
        return (
            <div>
                <h1>{text}</h1>
                <div>
                    <h3>Already a member of the Gallery?</h3>
                    <button onClick={this.props.onClickLogin}>Login to the Gallery</button>
                </div>
                <div>
                    <h3>New to the Gallery?</h3>
                    <button onClick={this.props.onClickSignup}>Sign up for the Gallery</button>
                </div>
            </div>

        )
    }
}
const mapStateToProps = (state, props) => ({
    login: state.validation.userState.login,
    text: 'Welcome to the Gallery'
});
const mapDispatchToProps = (dispatch, ownProps) => {
    return { onClickSignup: () => { dispatch(gal.showSignup())},
    onClickLogin: () => { dispatch(gal.showLogin())}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Welcome);