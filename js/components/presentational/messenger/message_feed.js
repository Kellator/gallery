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
        return (
            <div>
                <Message />
            </div>
        );
    };
};

export default MessageFeed;