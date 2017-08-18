//text for instructions on signing up for app
import React from 'react';
import PropTypes from 'prop-types';
//separate local imports from dependencies
import Menu from '../navigation/action_menu.js';
// import '../css/index.css';

//declare propTypes prior to component

// Exhibit.propTypes = {

// }

export default class Exhibit extends React.Component {
    render() {
        let exhibitImage = this.props.exhibit.image;
        let imageLink = this.props.exhibit.image;
        let location = this.props.exhibit.location;
        let title = this.props.exhibit.title;
        let creator = this.props.exhibit.creator;
        let menuType;
        console.log(this.props);
        console.log(exhibitImage);
        console.log(creator);
        return (
            <div>
                <a href={location} target="_blank">{<img className="exhibit-image" alt="image from exhibit" src={exhibitImage}/>}</a>
                <h2 className="exhibit-title"><a href={location} target="_blank">{title}</a></h2>
                <p className="exhibit-poster">Posted by: {creator} </p>
                <Menu className={"gallery_menu"}/>
            </div>
        )
    }
}