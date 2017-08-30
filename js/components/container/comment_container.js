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
        return (
            <div>
                <CommentList comments={this.props.exhibit.comments} />
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
            let data = {
                exhibit_id: ownProps.exhibit._id,
                user: ownProps.user,
                text: values.comment
            };
            console.log(data);
            dispatch(actions.GalleryActions.commentUpdate(data));

        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer);
