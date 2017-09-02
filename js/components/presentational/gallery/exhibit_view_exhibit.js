import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { dispatch } from 'react-redux';
import { connect } from 'react-redux';
import { Card, Icon, Image } from 'semantic-ui-react';
import CommentForm from './comment_form';
import CommentContainer from '../../container/comment_container';

import * as galleryActions from '../../../actions/gallery_actions';

class ExhibitViewExhibit extends React.Component {
    render() {
        console.log(this.props);
        let creator = this.props.exhibit.creator;
        let createdAt = this.props.exhibit.createdAt;
        let createDate = new Date(createdAt);
        let createDateDateString = createDate.toLocaleDateString();
        let createDateTimeString = createDate.toTimeString();
        let updatedAt = this.props.exhibit.updatedAt;
        let update = new Date(updatedAt);
        let updateDateString = update.toLocaleDateString();
        let updateTimeString = update.toTimeString();
        let image = this.props.exhibit.image;
        let title = this.props.exhibit.title;
        let status = this.props.exhibit.status;
        let collaborators = this.props.exhibit.collaborators;
        let description = this.props.exhibit.description;
        let comments = this.props.exhibit.comments;
        let exhibit_id = this.props.exhibit._id;
        let open;
        const extra = (
            <div><CommentContainer exhibit={this.props.exhibit} user={this.props.user} /></div>
        )
        const meta = "Created By: " + creator;
        const collaborationMeta = "Collaborators: " + collaborators; 
        const lastCollaboration = "Last Collaboration: " + updatedAt;
        const collabs = <div><p>{collaborationMeta}</p> <p>{lastCollaboration}</p></div>;
        return (
            <div>
                <Card>
                    <Image src={image} />
                    <Card.Content>
                        <Card.Header>
                            {title}
                        </Card.Header>
                        <Card.Meta>
                            {meta}
                        </Card.Meta>
                        <Card.Description>
                            {description}
                        </Card.Description>
                        <Card.Meta>
                            {collaborators}
                        </Card.Meta>
                        <Card.Meta>
                            {updateDateString }
                        </Card.Meta> 
                    </Card.Content>
                    <Card.Content>
                        {extra}
                    </Card.Content>
                </Card>
            </div>
        )
    }
}
const mapStateToProps = (state, props) => ({
    exhibit: state.gallery.exhibit,
    user: state.auth.user.username,
    });

export default connect(mapStateToProps)(ExhibitViewExhibit);
