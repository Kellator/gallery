//navigation bar at top of page. L- Search Gallery input field  C - logo  R - usermenu
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { dispatch } from 'react-redux';
import { Menu } from 'semantic-ui-react';
//separate local imports from dependencies.
import GallerySearch from '../presentational/navigation/gallery_search';
import UserMenu from '../presentational/navigation/user_menu';
import * as galleryActions from '../../actions/gallery_actions';

class NavBar extends React.Component {
    render() {
        return (
            <Menu attached='top'>
                <GallerySearch onSubmit={this.props.onSubmit}/>
                <UserMenu />
            </Menu>
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
            // dispatch(galleryAction.showAll());
            dispatch(galleryActions.galleryFetch(search));
        },
        userMenuClick: () => {
            event.preventDefault();
            alert("menu clicked");
            dispatch(galleryActions.toggleMenu());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);