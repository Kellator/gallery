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
        let messages = (this.props.messages) ? this.props.messages.map((message, index) => {
            return <Message key={index}   message={message}/>
        }) : undefined;
        if(messages == undefined) {
            return messages = <p>Be the first!</p>
        }
        return (
            <div>
                {messages}
            </div>
        );
    };
};

export default MessageFeed;