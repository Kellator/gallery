import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { dispatch } from 'react-redux';
import { connect } from 'react-redux';
import CommentForm from '../presentational/gallery/comment_form';
import CommentList from './comment_list';
import * as actions from '../../actions';

class CommentContainer extends React.Component {
    render() {
        console.log(this.props);
        // let user = this.props.user;
        let comments = this.props.exhibit.comments;
        return (
            <div>
                <CommentList comments={comments} />
                <CommentForm onSubmit={this.props.newCommentSubmit} exhibit={this.props.exhibit} user={this.props.user}/>
            </div>
        )
    }
}
const mapStateToProps = (state, props) => ({
    
})
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        newCommentSubmit: (values) => {
            event.preventDefault();
            console.log("newcommentsubmit");
            console.log(values);
            console.log(ownProps);
            let exhibit_id = ownProps.exhibit._id;
            let user = ownProps.user;
            let text = values.comment;
            let data = {
                exhibit_id: exhibit_id,
                user: user,
                text: text
            }
            console.log(data);
            dispatch(actions.GalleryActions.commentUpdate(data));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer);
