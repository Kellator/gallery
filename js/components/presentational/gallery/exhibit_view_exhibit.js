import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { dispatch } from 'react-redux';
import { connect } from 'react-redux';

import * as galleryActions from '../../../actions/gallery_actions';

class ExhibitViewExhibit extends React.Component {
    render() {
        console.log(this.props);
        let creator = this.props.exhibit.creator;
        let createdOn = this.props.exhibit.createdOn;
        let updatedOn = this.props.exhibit.updatedOn;
        let image = this.props.exhibit.image;
        let title = this.props.exhibit.title;
        let status = this.props.status;
        let collaborators = this.props.exhibit.collaborators;
        let open;
        console.log(title);
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
                    <p>On: {createdOn}</p>
                    <p>Last collaboration: {updatedOn}</p>
                    <p>Collaborators: {collaborators}</p>
                    <p>Collaborate by joinging the chat channel or leaving a comment.</p>
                </div>
        }
        else {
            component = 
                <div>
                    <h1>{title}</h1>
                    <img src={image}/>
                    <p>Created By: {creator}</p>
                    <p>On: {createdOn}</p>
                    <p>This work is closed to collaboration but open to comment.</p>
                    <p>To leave a comment, click here.</p>
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
    exhibit: state.gallery.exhibit,
    status: state.gallery.exhibit.status
    });
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        commentOnClick: () => { 
            console.log("comment click");

            // dispatch(showSignup())
        },

    }
}
    
export default connect(mapStateToProps, mapDispatchToProps)(ExhibitViewExhibit);