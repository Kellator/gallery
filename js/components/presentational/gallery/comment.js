import React from 'react';
import PropTypes from 'prop-types';

class Comment extends React.Component {
    render() {
        console.log(this.props);
        let username;
        let timestamp;
        let text;
        return (
            <div>
                <p>{username} ({timestamp}) {text}</p>
            </div>

        )
    }
}
export default Comment;