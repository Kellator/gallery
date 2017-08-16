import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { dispatch } from 'react-redux';

//separate local imports from dependencies
import * as actions from '../../actions/index';
import Menu from '../presentational/navigation/action_menu';
import Exhibit from '../presentational/gallery/exhibit';
import Exhibits from './exhibits';
import Wall from '../presentational/gallery/wall';
import NoResult from '../presentational/gallery/noResult';

//declare propTypes prior to component

// Gallery.propTypes = {

// }
// map over all exhibits and display 

class Gallery extends React.Component {
    render() {
        let exhibits = this.props.galleryExhibits;
        console.log(exhibits);
        if (exhibits.length === 0) {
            return <NoResult />
        }
        return <Exhibits exhibits={this.props.galleryExhibits} />
    };
};
const mapStateToProps = (state, props) => ({
    gallerySearch: state.gallery.gallerySearch,
    galleryExhibits: state.gallery.galleryExhibits
});
const mapDispatchToProps = (dispatch, ownProps) => {
    return { 

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Gallery);