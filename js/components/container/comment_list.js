import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { dispatch } from 'react-redux';
import { connect } from 'react-redux';
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import Comments from '../presentational/gallery/comment';

class CommentList extends React.Component {
    render() {
        console.log(this.props);
        let comments = (this.props.comments) ? this.props.comments.map((comment, index) => {
            return <Comments key={index}  id={comment._id} comment={comment}/>
        }) : undefined;
        if (comments == undefined) {
            return comments = <p>undefined</p>
        }
        return(
            <Comment.Group>
                <Header as='h3' dividing>Comments</Header>
                {comments}
            </Comment.Group>
        )
    }
}
export default CommentList;