//text for instructions on signing up for app
import React from 'react';
import PropTypes from 'prop-types';
//separate local imports from dependencies
import Menu from '../navigation/action_menu.js';
import Exhibit from './exhibit';

//declare propTypes prior to component

// Wall.propTypes = {

// }
//  WALL SHOULD RETURN LIST OF EXHIBIT COMPONENTS THAT BELONG TO SPECIFIC STATE SELECTION IE LANDSCAPES, PORTRAITS, ETC
export default class Wall extends React.Component {
    render() {
        console.log(this.props);
        // const walls = this.props.walls.map(wall => {
        //     return <Exhibit key={exhibit.name} />
        // });
        return (
            <div className="wall_list">
                {/* {walls}
                <h1>{wall.name}</h1> */}
                <p>To Show Wall Loaded</p>
            </div>
        )
    }
}