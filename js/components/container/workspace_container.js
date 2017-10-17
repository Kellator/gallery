import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { dispatch } from 'react-redux';
import { connect } from 'react-redux';
import { Field, reduxForm, initialize } from 'redux-form';
//separate local imports from dependencies;
import Gallery from './gallery';
import CreateWorkspace from './create_workspace';

import * as actions from '../../actions/index';

class Workspace extends React.Component {
    render() {
        console.log(this.props);
        let galleryView = this.props.galleryView;
        let exhibitView = this.props.exhibitView;
        let createWorkspaceView = this.props.createWorkspaceView;
        let confirmExhibitView = this.props.confirmExhibitView;
        let componentToRender;
        if (galleryView == true) {
            componentToRender = <Gallery />
        }
        if (createWorkspaceView === true) {
            componentToRender = <CreateWorkspace 
                newExhibitSubmit={this.props.newExhibitSubmit} 
                fileOnChange={this.props.fileOnChange}
                />
        }
        return (
            <div>
                {componentToRender}
            </div>
        )
    }
}
const mapStateToProps = (state, props) => ({
    galleryView: state.gallery.view.galleryView,
    exhibitView: state.gallery.view.exhibitView,
    createWorkspaceView: state.gallery.view.createWorkspaceView,
    confirmExhibitView: state.gallery.view.confirmExhibitView,
    user: state.auth.user.username
});
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        newExhibitSubmit: (values) => {
            event.preventDefault();
            console.log(values);
            console.log(ownProps);
            let data = {
                creator: ownProps.user.username,
                title: values.exhibit_title,
                description: values.exhibit_description,
                exhibitType: values.exhibit_type,
                location: values.exhibit_url,
                image: values.thumbnail_image,
                status: values.collaborate
            }
            // dispatch(actions.MediaActions.uploadDocumentRequest({
            //     file,
            //     name: 'test'
            // }))
            dispatch(actions.GalleryActions.postNewExhibit(data));
            // dispatch(actions.GalleryActions.loadConfirmExhibit(values));
        },
        fileOnChange: (data) => {
            event.preventDefault();
            console.log("handle change fired")
            const file = files[0];
            this.props.actions.MediaActions.uploadDocumentRequest({
                file,
                name: 'test'
            })

        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Workspace);

// const handleUploadFile = (event) => {
//     const data = new FormData();
//     data.append('file', event.target.files[0]);
//     data.append('name', 'some value user types');
//     data.append('description', 'some value user types');
//     // '/files' is your node.js route that triggers our middleware
//     axios.post('/files', data).then((response) => {
//       console.log(response); // do something with the response
//     })
//   }