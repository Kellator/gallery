import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { dispatch } from 'react-redux';

//separate local imports from dependencies
import * as actions from '../../actions/index';
// import * as galleryActions from '../../actions/gallery_actions';
import CreateExhibitForm from '../presentational/gallery/create_exhibit';
import ConfirmExhibitCard from '../presentational/gallery/confirm_exhibit';

class CreateWorkspace extends React.Component {
    render() {
        console.log(this.props);
        let create_exhibit = this.props.createExhibitView;
        let confirm_exhibit = this.props.confirmExhibitView;
        let componentToRender;
        if (create_exhibit) {
            componentToRender = <CreateExhibitForm onSubmit={this.props.newExhibitSubmit}/>
        }
        if (confirm_exhibit) {
            componentToRender =  <ConfirmExhibitCard />
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
        newExhibitSubmit: (values) => {
            event.preventDefault();
            console.log("there, there's a damned submit");
            console.log(values);
            dispatch(actions.GalleryActions.loadConfirmExhibit(values));
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateWorkspace);