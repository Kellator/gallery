import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { dispatch } from 'react-redux';
import {FileUpload } from 'redux-file-upload';
import { Form, Button, TextArea } from 'semantic-ui-react';

//separate local imports from dependencies
import * as actions from '../../actions/index';
// import * as galleryActions from '../../actions/gallery_actions';
import CreateExhibitForm from '../presentational/gallery/create_exhibit';
import ConfirmExhibitCard from '../presentational/gallery/confirm_exhibit';
import FileInputForm from '../presentational/gallery/file_input';
import UploadMyFile from '../presentational/gallery/uploadMyFile.js';
let uploadUrl = "http://localhost:5050/upload"

class CreateWorkspace extends React.Component {
    render() {
        console.log(this.props);
        let create_exhibit = this.props.createExhibitView;
        let confirm_exhibit = this.props.confirmExhibitView;
        let componentToRender;
        if (create_exhibit) {
            componentToRender = 
            <div>
                <CreateExhibitForm onSubmit={this.props.newExhibitSubmit}/>
                <UploadMyFile />
                {/* <label htmlFor="file_upload">Upload a copy of your project.</label>
                <FileInputForm onChange={this.props.fileOnChange}/> */}
            </div>
        }
        if (confirm_exhibit) {
            componentToRender =  <ConfirmExhibitCard values={this.props.values}/>
        };
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
    createExhibitView: state.gallery.view.createExhibitView,
    confirmExhibitView: state.gallery.view.confirmExhibitView
});
const mapDispatchToProps = (dispatch, ownProps) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateWorkspace);