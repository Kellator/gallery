import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { dispatch } from 'react-redux';
import { connect } from 'react-redux';
import { Field, reduxForm, initialize } from 'redux-form';
//separate local imports from dependencies;
import Gallery from './gallery';
import CreateExhibitForm from '../presentational/gallery/create_exhibit';

import * as actions from '../../actions/index';

class Workspace extends React.Component {
    render() {
        console.log(this.props);
        let view = this.props.view;
        let componentToRender;
        if (view.galleryView == true) {
            componentToRender = <Gallery />
        }
        if (view.createExhibitView === true) {
            componentToRender = <CreateExhibitForm onSubmit={this.props.newExhibitSubmit}/>
        }
        return (
            <div>
                {componentToRender}
            </div>
        )
    }
}
const mapStateToProps = (state, props) => ({
    view: state.gallery.view
});
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        newExhibitSubmit: (values) => {
            event.preventDefault();
            console.log("there, there's a damned submit");
            console.log(ownProps);
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Workspace);