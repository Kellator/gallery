import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { dispatch } from 'react-redux';
import { connect } from 'react-redux';
import CommentForm from './comment_form';
import CommentContainer from '../../container/comment_container';

import * as galleryActions from '../../../actions/gallery_actions';

class ExhibitViewExhibit extends React.Component {
    render() {
        console.log(this.props);
        let creator = this.props.exhibit.creator;
        let createdAt = this.props.exhibit.createdAt;
        let updatedAt = this.props.exhibit.updatedAt;
        let image = this.props.exhibit.image;
        let title = this.props.exhibit.title;
        let status = this.props.exhibit.status;
        let collaborators = this.props.exhibit.collaborators;
        let description = this.props.exhibit.description;
        let comments = this.props.exhibit.comments;
        let exhibit_id = this.props.exhibit._id;
        let open;
        console.log(status);
        if (status !== "Viewing Only") {
            open = true;
        }
        else {
            open = false;
        }
        
        let component;
        if(open == true) {
            component = 
                <div>
                    <h1>{title}</h1>
                    <img src={image} />
                    <p>Created By: {creator}</p>
                    <p>On: {createdAt}</p>
                    <p>{description}</p>
                    <p>Last collaboration: {updatedAt}</p>
                    <p>Collaborators: {collaborators}</p>
                    <p>Collaborate by joinging the chat channel or leaving a comment.</p>
                    <CommentContainer exhibit={this.props.exhibit} />
                </div>
        }
        else {
            component = 
                <div>
                    <h1>{title}</h1>
                    <img src={image}/>
                    <p>Created By: {creator}</p>
                    <p>On: {createdAt}</p>
                    <p>{description}</p>
                    <p>This work is closed to collaboration but open to comment.</p>
                    <CommentContainer exhibit={this.props.exhibit} />
                </div>
        }
        return (
            <div>
                {component}
            </div>
        )
    }
}
const mapStateToProps = (state, props) => ({
    exhibit: state.gallery.exhibit
    });
const mapDispatchToProps = (dispatch, ownProps) => {
    console.log(ownProps);
    return {

    }
}
    
export default connect(mapStateToProps, mapDispatchToProps)(ExhibitViewExhibit);