import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { dispatch } from 'react-redux';
import { connect } from 'react-redux';

import GalleryViewExhibit from '../presentational/gallery/gallery_view_exhibit';

class ExhibitsList extends React.Component {
    render() {
        console.log(this.props);
        // let click = this.props.exhibitClick;
        // console.log(click);
        let exhibits = (this.props.exhibits) ? this.props.exhibits.map((exhibit) => {
            return <GalleryViewExhibit key={exhibit._id} id={exhibit._id} exhibit={exhibit} />
        }) : undefined;

        return (
            <div>
                {exhibits}
            </div>
        )
    }
}
export default ExhibitsList;
