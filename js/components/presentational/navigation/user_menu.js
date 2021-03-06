import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { dispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';
import * as galleryActions from '../../../actions/gallery_actions';
import * as authActions from '../../../actions/auth_actions';
import LogoutPage from './logout';


//separate local imports from dependencies
//declare propTypes prior to component

// Menu.propTypes = {

// }

class UserMenu extends React.Component {
    render() {
        console.log(this.props);
        return (
            <Dropdown text='User Menu'>
                <Dropdown.Menu>
                    <Dropdown.Item  onClick={this.props.newExhibitClickHandler} text='Create an Exhibit' />
                    <Dropdown.Item text='My Profile' />
                    <Dropdown.Item text='My Gallery' />
                    <Dropdown.Item text='My Messages' />
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={this.props.logoutClickHandler} text='Log Out' />
                </Dropdown.Menu>
            </Dropdown> 
        );       
    };
}; 
const mapStateToProps = (state, props) => ({
    user: state.auth.user.username
})
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        newExhibitClickHandler: (event) => {
            console.log("gallery click");
            dispatch(galleryActions.loadCreateExhibit());
        },
        logoutClickHandler: (event) => {
            console.log("logout click");
            dispatch(authActions.authSignout());

        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);