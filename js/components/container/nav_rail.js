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
        console.log(this.props);
        return (
            <div>
                <GallerySearch onSubmit={this.props.onSubmit}/>
                <GalleryLogo />
                <Menu title={"Menu A"} className={"user_menu"} onClick={this.props.onClickA}/>
                {/* <Menu title={"Menu B"} className={"gallery_menu"} onClick={this.props.onClickB}/> */}
            </div>
        );
    }
}
// add default value to search props to return all on initial load?
const mapStateToProps = (state, props) => ({
    // user: state.auth.user.username
});
const mapDispatchToProps = (dispatch, ownProps) => {
    return { 
        onSubmit:(values) => {
            event.preventDefault();
            console.log(values);
            console.log(ownProps);
            let newValue = values.gallery_search_input;
            console.log(newValue);
            dispatch(galleryActions.galleryFetch(newValue))
        },
        onClickA: () => {
            event.preventDefault();
            dispatch(galleryActions.toggleMenu());
            console.log("Button A Clicked");
        }
        // onClickB: () => {
        //     event.preventDefault();
        //     dispatch(actions.toggleMenu());
        //     console.log("Button B Clicked");
        // }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);