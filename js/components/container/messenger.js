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
// default channel will always load main.  User must choose to enter other channel
// What does socket need to do:  broadcast :
    render() {
        console.log(this.props);
        const socket = io();
        var username = this.props.user.username;
        socket.emit('chat mounted', username);
        // what chat has opened  - ?  does this need a join?
        // socket.emit('welcome', 'Welcome, {user}, to the {channel} chat.')
        // who has entered the chat
        // socket.broadcast.emit('broadcast', '{user} has entered the chat.')
        // load last message saved to DB 
        // socket.emit('last message', {message})
        console.log(this.props);
        return (
            <div>
                <h3>Messenger</h3>
                <MessageFeed messages={"this.state.messages"} />
                <MessageInput onSend={"this.sendHandler"} />
            </div>
        );
    };
};
const mapStateToProps = (state, props) => ({

});
export default connect(mapStateToProps)(Messenger);