import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { dispatch } from 'react-redux';
import { connect } from 'react-redux';
import Comment from '../presentational/gallery/comment';

class CommentList extends React.Component {
    render() {
        console.log(this.props);
        let comments = (this.props.comments) ? this.props.comments.map((comment, index) => {
            return <Comment key={index}  id={comment._id} comment={comment} />
        }) : undefined;
        return(
            <div>
                {comments}
            </div>
        )
    }
}
export default CommentList;