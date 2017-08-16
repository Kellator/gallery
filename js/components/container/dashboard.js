import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { dispatch } from 'react-redux';
import { connect } from 'react-redux';
import { Field, reduxForm, initialize } from 'redux-form';
//separate local imports from dependencies;
import BrowserRail from '../presentational/browser_rail';
import NavBar from '../container/nav_rail';
import Gallery from '../container/gallery';
import Messenger from './messenger';
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
        let username = this.props.username
        return (
            <div>
                <NavBar />
                <p>Welcome to the Gallery, {username}!</p>
                <Gallery />
                <Messenger /> 
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    username: state.auth.user.username,
    email: state.auth.user.email,
    id: state.auth.user.id
});
// const mapDispatchToProps = (dispatch, ownProps) => {
    
// }

export default connect(mapStateToProps)(Dashboard);