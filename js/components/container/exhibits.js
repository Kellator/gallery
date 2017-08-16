import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { dispatch } from 'react-redux';
import { connect } from 'react-redux';

import Exhibit from '../presentational/gallery/exhibit';

class Exhibits extends React.Component {
    render() {
        console.log(this.props);
        let exhibits = (this.props.exhibits) ? this.props.exhibits.map((exhibit, index) => {
            return <Exhibit key={index} exhibit={exhibit} />
        }) : undefined;
        return (
            <div>
                {exhibits}
            </div>
        )
    }
}
export default Exhibits;
// const mapStateToProps = (state, props) => ({
//     gallerySearch: state.gallery.gallerySearch,
//     galleryExhibits: state.gallery.galleryExhibits
// });
// const mapDispatchToProps = (dispatch, ownProps) => {
//     return { 

//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Exhibits);