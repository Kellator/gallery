//navigation bar at top of page. L- Search Gallery input field  C - logo  R - usermenu
import React from 'react';
import PropTypes from 'prop-types';
//separate local imports from dependencies
import GallerySearch from './gallery_search';
import GalleryLogo from '../presentational/landing/gallery_logo';
import Menu from './action_menu'

export default class NavBar extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <GallerySearch onSubmit={this.props.onSubmit}/>
                <GalleryLogo />
                <Menu />
            </div>
        );
    }
}