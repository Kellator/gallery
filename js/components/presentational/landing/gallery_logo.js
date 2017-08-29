//gallery logo/heading
import React from 'react';
import PropTypes from 'prop-types';
//separate local imports from dependencies


//declare propTypes prior to component

// GalleryLogo.propTypes = {

// }

export default class GalleryLogo extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome to the Gallery!</h1>
                <h2>A collaborative workspace for your passion.</h2>
            </div>
        )
    }
}