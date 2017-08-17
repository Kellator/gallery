import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { dispatch } from 'react-redux';
import { connect } from 'react-redux';

class CommentsList extends React.Component {
    let comments_list = this.props.comments;
    render() {
        return {

        }
    }
}
const mapStateToProps = (state, props) => ({
    comments: state.exhibit.comment
})