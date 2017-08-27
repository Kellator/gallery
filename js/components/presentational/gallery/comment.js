import React from 'react';
import PropTypes from 'prop-types';
import { Button, Comment, Form, Header } from 'semantic-ui-react';

class Comments extends React.Component {
    render() {
        console.log(this.props);
        let username = this.props.comment.creator;
        let timestamp = this.props.comment.createdAt;
        let theDate = new Date(timestamp);
        let dateString = theDate.toLocaleDateString();
        let timeString = theDate.toTimeString();
        console.log(dateString);
        console.log(timeString);
        let text = this.props.comment.text;
        return (
            <Comment>
                <Comment.Content>
                    <Comment.Author>{username}</Comment.Author>
                    <Comment.Metadata>{dateString}</Comment.Metadata>
                    {/* <Comment.Metadata>{timeString}</Comment.Metadata> */}
                    <Comment.Text>{text}</Comment.Text>
                </Comment.Content>
            </Comment>
        )
    }
}
export default Comments;
