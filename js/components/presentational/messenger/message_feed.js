// REAL TIME MESSAGE DISPLAY
// state determines channel
import React from 'react';
import PropTypes from 'prop-types';

import Message from './message';

// MessageFeed.propTypes = {

// }
// loop through each message and pass it to the message component
class MessageFeed extends React.Component {
    render() {
        console.log(this.props);
        const messages = this.props.messages.map((message, i) => {
            return (
                <Message key={i} username={message.username} message={message.message} />
            );
        });
        return (
            <div>
                {messages}
            </div>
        );
    };
};

export default MessageFeed;