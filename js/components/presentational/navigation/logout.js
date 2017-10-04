import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import * as authActions from '../../../actions/auth_actions';

class LogoutPage extends React.Component {
    componentWillMount() {
        this.props.dispatch(authActions.authSignout())
        this.props.router.replace('/')
    }
    render() {
        return null
    }
}
export default connect()(LogoutPage);