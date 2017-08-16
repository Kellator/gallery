//navigation bar at top of page. L- Search Gallery input field  C - logo  R - usermenu
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { dispatch } from 'react-redux';
//separate local imports from dependencies.
import GallerySearch from '../presentational/navigation/gallery_search';
import GalleryLogo from '../presentational/landing/gallery_logo';
import Menu from '../presentational/navigation/action_menu';
import * as galleryActions from '../../actions/gallery_actions';

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <GallerySearch onSubmit={this.props.onSubmit}/>
                <GalleryLogo />
                <Menu title={"Menu A"} className={"user_menu"} onClick={this.props.onClickA}/>
            </div>
        );
    }
}
// add default value to search props to return all on initial load?
const mapStateToProps = (state, props) => ({
    gallerySearch: state.gallery.gallerySearch,
    galleryExhibits: state.gallery.galleryExhibits
});
const mapDispatchToProps = (dispatch, ownProps) => {
    return { 
        onSubmit:(values) => {
            event.preventDefault();
            let search = values.gallery_search_input;
            if (search == undefined ) {
                search = "";
            }
            dispatch(galleryActions.galleryFetch(search))
        },
        onClickA: () => {
            event.preventDefault();
            dispatch(galleryActions.toggleMenu());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);