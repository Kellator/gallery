//  CONTAINER FOR MESSENGER COMPONENTS - DISPLAY FEED AND INPUT FORM
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { dispatch } from 'react-redux';
import io from 'socket.io-client';

//separate local imports from dependencies
import * as actions from '../../actions/index';
import MessageFeed from '../presentational/messenger/message_feed';
import MessageInput from '../presentational/messenger/message_input';
//declare propTypes prior to component

// Messenger.propTypes = {

// }
// MAIN CHAT LOGIC HERE - COMMUNICATE WITH CHAT SERVER (SEND AND RECEIVE MSGS)  THEN PASS DATA RECEIVED FROM 
// SERVER TO OTHER COMPONENTS TO DISPLAY
class Messenger extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <MessageFeed messages={} />
                <MessageInput onSend={} />
            </div>
        )
    }
}
export default Messenger;