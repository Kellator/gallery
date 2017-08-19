//text for instructions on signing up for app
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { dispatch } from 'react-redux';
import { Field, reduxForm, initialize } from 'redux-form';
import { Redirect } from 'react-router';
//separate local imports from dependencies
import Menu from '../navigation/action_menu.js';
import * as authActions from '../../../actions/auth_actions';
import * as galleryActions from '../../../actions/gallery_actions';
// import '../css/index.css';

//declare propTypes prior to component

// Exhibit.propTypes = {

// }

class GalleryViewExhibit extends React.Component {
    render() {
        let exhibitImage = this.props.exhibit.image;
        let imageLink = this.props.exhibit.image;
        let location = this.props.exhibit.location;
        let title = this.props.exhibit.title;
        let creator = this.props.exhibit.creator;
        let menuType;
        console.log(this.props);
        return (
            <div>
                <img className="exhibit-image" onClick={this.props.onClick} alt="image from exhibit" src={exhibitImage}/>
                <h2 className="exhibit-title"><a href={location} target="_blank">{title}</a></h2>
                <p className="exhibit-poster">Posted by: {creator} </p>
                <Menu className={"gallery_menu"}/>
            </div>
        )
    }
}
export default GalleryViewExhibit;
// const mapStateToProps = (state, props) => ({

// });
// const mapDispatchToProps = (dispatch, ownProps) => {
//     // return {
//     //     exhibitOnClick: () => { 
//     //         event.preventDefault();
//     //         let exhibit = ownProps.exhibit;
//     //         let exhibit_id = exhibit._id;
//     //         console.log("image clicked for full exhibit view");
//     //         console.log(ownProps);
//     //         console.log(exhibit);
//     //         console.log(exhibit_id);
//     //         dispatch(galleryActions.showExhibit(exhibit));
//     //     },
//     // }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(GalleryViewExhibit);