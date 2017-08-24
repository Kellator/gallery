import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { dispatch } from 'react-redux';
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react';
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
        const extra = (
            <div><CommentContainer exhibit={this.props.exhibit} /></div>
        )
        const meta = "Created By: " + creator;
        const collaborationMeta = "Collaborators: " + collaborators; 
        const lastCollaboration = "Last Collabboration: " + updatedAt;
        const collabs = <div><p>{collaborationMeta}</p> <p>{lastCollaboration}</p></div>;
        const collaborationExtra = <p>Collaborate by joinging the chat channel or leaving a comment.</p>;
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
                    <Card 
                    image={image}
                    header={title}
                    meta={collabs}
                    description={description}
                    extra={extra} 
                    />
                </div>
        }
        else {
            component = 
                <div>
                    <Card
                        image={image}
                        header={title}
                        meta={meta}
                        description={description}
                        extra={extra} 
                    />
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
