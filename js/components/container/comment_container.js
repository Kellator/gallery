import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { dispatch } from 'react-redux';
import { connect } from 'react-redux';
import CommentForm from '../presentational/gallery/comment_form';
import CommentList from './comment_list';
import * as galleryActions from '../../actions/gallery_actions';

class CommentContainer extends React.Component {
    render() {
        console.log(this.props.exhibit);
        let id = this.props.exhibit._id;
        console.log(id);
        let comments = this.props.exhibit.comments;
        const handleSubmit = (values, dispatch) => {
            console.log(values);
            console.log(id);
            let text = values.comment;
            dispatch(galleryActions.commentUpdate(id, text));

        }
        return (
            <div>
                <CommentList comments={comments} />
                <CommentForm onSubmit={handleSubmit}/>
            </div>
        )
    }
}
const mapStateToProps = (state, props) => ({
})
const mapDispatchToProps = (state, ownProps) => {
    console.log(ownProps);
    let id = ownProps.exhibit._id;
    console.log(id);
        return {
            hiccup: "hiccup"
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer);
