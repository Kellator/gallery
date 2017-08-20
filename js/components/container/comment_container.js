import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { dispatch } from 'react-redux';
import { connect } from 'react-redux';
import CommentForm from '../presentational/gallery/comment_form';
import CommentList from './comment_list';

class CommentContainer extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <CommentList />
                <CommentForm onSubmit={ handleSubmit }/>
            </div>
        )
    }
}
export default CommentContainer;