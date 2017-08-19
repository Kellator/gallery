import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { dispatch } from 'react-redux';
import { connect } from 'react-redux';

import GalleryViewExhibit from '../presentational/gallery/gallery_view_exhibit';

class ExhibitsList extends React.Component {
    render() {
        console.log(this.props);
        let exhibits = (this.props.exhibits) ? this.props.exhibits.map((exhibit, index) => {
            return <GalleryViewExhibit key={index} exhibit={exhibit} />
        }) : undefined;
        return (
            <div>
                {exhibits}
            </div>
        )
    }
}
export default ExhibitsList;
// const mapStateToProps = (state, props) => ({
//     gallerySearch: state.gallery.gallerySearch,
//     galleryExhibits: state.gallery.galleryExhibits
// });
// const mapDispatchToProps = (dispatch, ownProps) => {
//     return { 

//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Exhibits);