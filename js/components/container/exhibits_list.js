import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { dispatch } from 'react-redux';
import { connect } from 'react-redux';

import GalleryViewExhibit from '../presentational/gallery/gallery_view_exhibit';

class ExhibitsList extends React.Component {
    render() {
        console.log(this.props);
        let click = this.props.exhibitClick;
        console.log(click);
        let exhibits = (this.props.exhibits) ? this.props.exhibits.map((exhibit) => {
            return <GalleryViewExhibit onClick={click} key={exhibit._id} exhibit={exhibit} />
        }) : undefined;
        return (
            <div>
                {exhibits}
            </div>
        )
    }
}
// export default ExhibitsList;
const mapStateToProps = (state, props) => ({

});
const mapDispatchToProps = (dispatch, ownProps) => {
    console.log(ownProps);
    return { 
        exhibitClick: (event) => {
            event.preventDefault();
            let exhibitList = ownProps.exhibits;
            let index = exhibitList.indexOf(event.target.value);
            console.log(exhibitList);
            console.log(index);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ExhibitsList);