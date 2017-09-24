//  CONTAINER FOR MESSENGER COMPONENTS - DISPLAY FEED AND INPUT FORM
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { dispatch } from 'react-redux';
// import io from 'socket.io-client';

//separate local imports from dependencies
import * as actions from '../../actions/index';
import MessageFeed from '../presentational/messenger/message_feed';
import MessageInput from '../presentational/messenger/message_input';
//declare propTypes prior to component

// Messenger.propTypes = {

// }
//welcome to {channel}
// user has joined {channel}
// last {message} saved to {channel}
class Messenger extends React.Component {

    render() {
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