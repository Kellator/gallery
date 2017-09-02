import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { dispatch } from 'react-redux';

//separate local imports from dependencies
import * as actions from '../../actions/index';

import GalleryViewExhibit from '../presentational/gallery/gallery_view_exhibit';
import ExhibitsList from './exhibits_list';
import NoResult from '../presentational/gallery/noResult';
import ExhibitViewExhibit from '../presentational/gallery/exhibit_view_exhibit';

//declare propTypes prior to component

// Gallery.propTypes = {

// }
// map over all exhibits and display 

class Gallery extends React.Component {
    render() {
        let view = this.props.galleryView;
        let exhibitView = this.props.exhibitView;
        if (view) {
            let exhibits = this.props.galleryExhibits;
                if (exhibits.length === 0) {
                    return <NoResult />
                };
                if (exhibitView) {
                    return <ExhibitViewExhibit exhibit={this.props.galleryExhibits}/>
                };
            return <ExhibitsList exhibits={this.props.galleryExhibits} />
        };
    }
};
const mapStateToProps = (state, props) => ({
    galleryView: state.gallery.view.galleryView,
    exhibitView: state.gallery.view.exhibitView,
    gallerySearch: state.gallery.gallerySearch,
    galleryExhibits: state.gallery.galleryExhibits
});
export default connect(mapStateToProps)(Gallery);