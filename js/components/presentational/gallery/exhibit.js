//text for instructions on signing up for app
import React from 'react';
import PropTypes from 'prop-types';
//separate local imports from dependencies
import Menu from '../navigation/action_menu.js';

//declare propTypes prior to component

// Exhibit.propTypes = {

// }

export default class Exhibit extends React.Component {
    render() {
        let exhibitImage;
        let imageLink;
        let sourceLink;
        let exhibitDescription;
        let exhibitComments;
        let menuType;
        console.log(this.props);
        return (
            <div>
                <img src={exhibitImage}/>
                <p>{exhibitDescription}</p>
                <Menu className={"gallery_menu"}/>
                <p>To Show Exhibit Loaded</p>
            </div>
        )
    }
}