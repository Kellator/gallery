import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { dispatch } from 'react-redux';
import { connect } from 'react-redux';
import { Field, reduxForm, initialize } from 'redux-form';
//separate local imports from dependencies;
import NavBar from './nav_rail';
import Gallery from './gallery';
import Workspace from './workspace_container';
import LogIn from './login-container';

import * as actions from '../../actions/index';
//declare propTypes prior to component

// Dashboard.propTypes = {
//     username: PropTypes.string,
//     email: PropTypes.string,
//     id: PropTypes.string
// }

class Dashboard extends React.Component {
    render() {
        console.log(this.props);
        let username = this.props.username;
        let userData = this.props;
        if(!username) {
            return (
                <div>
                    <LogIn />
                </div>
            )
        }
        return (
            <div>
                <NavBar />
                <p>Welcome to the Gallery, {username}!</p>
                {/* <Gallery /> */}
                <Workspace user={userData}/>

            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    username: state.auth.user.username,
    email: state.auth.user.email,
    id: state.auth.user.id
});
export default connect(mapStateToProps)(Dashboard);