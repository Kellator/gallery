import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { dispatch } from 'react-redux';

//separate local imports from dependencies
import * as actions from '../../actions/index';
import MessageFeed from '../presentational/messenger/message_feed';
import MessageInput from '../presentational/messenger/message_input';
//declare propTypes prior to component

// Messenger.propTypes = {

// }

//  MESSENGER COMPONENT AS CONTAINER - FEEDS MESSAGE STATE FROM INPUT TO DISPLAY?
class Messenger extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <MessageFeed />
                <MessageInput />
            </div>
        )
    }
}