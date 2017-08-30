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
            componentToRender = <CreateWorkspace newExhibitSubmit={this.props.newExhibitSubmit}/>
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
            console.log("there, there's a damned submit");
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
            dispatch(actions.GalleryActions.postNewExhibit(data));
            // dispatch(actions.GalleryActions.loadConfirmExhibit(values));
        },
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Workspace);