import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { dispatch } from 'react-redux';

//separate local imports from dependencies
import * as actions from '../../actions/index';
import Menu from '../presentational/navigation/action_menu';
import Exhibit from '../presentational/gallery/exhibit';
import Wall from '../presentational/gallery/wall';
import Messenger from './messenger';
//declare propTypes prior to component

// Gallery.propTypes = {

// }
// SHOULD SHOW ALL WALLS IN THE APP ON LOAD AND THEN SWITCH WHEN USER SELECTS 'VIEW MY GALLERY'

class Gallery extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <p>To Show Gallery Loaded</p>
                <Wall /> 
                <Messenger />               
            </div>
        );
    };
};
const mapStateToProps = (state, props) => ({
   
});
const mapDispatchToProps = (dispatch, ownProps) => {
    return { 

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Gallery);