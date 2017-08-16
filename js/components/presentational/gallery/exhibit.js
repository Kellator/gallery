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
        let siteLink = this.props.exhibit.siteLink;
        let title = this.props.exhibit.title;
        let postedBy = this.props.exhibit.username;
        let menuType;
        console.log(this.props);
        console.log(exhibitImage);
        console.log(postedBy);
        return (
            <div>
                <a href={siteLink} target="_blank">{<img className="exhibit-image" alt="image from exhibit" src={exhibitImage}/>}</a>
                <h2 className="exhibit-title"><a href={siteLink} target="_blank">{title}</a></h2>
                <p className="exhibit-poster">Posted by: {postedBy} </p>
                <Menu className={"gallery_menu"}/>
            </div>
        )
    }
}