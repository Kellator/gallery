//text for instructions on signing up for app
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { dispatch } from 'react-redux';
import { Field, reduxForm, initialize } from 'redux-form';
import { Redirect } from 'react-router';
import { Card, Image } from 'semantic-ui-react';
//separate local imports from dependencies
// import Menu from '../navigation/action_menu.js';  update when gallery action menu created
import * as authActions from '../../../actions/auth_actions';
import * as galleryActions from '../../../actions/gallery_actions';
// import '../css/index.css';

//declare propTypes prior to component

// Exhibit.propTypes = {

// }

class GalleryViewExhibit extends React.Component {
    render() {
        let exhibitImage = this.props.exhibit.image;
        let image = this.props.exhibit.image;
        let location = this.props.exhibit.location;
        let title = this.props.exhibit.title;
        let creator = this.props.exhibit.creator;
        let description = this.props.exhibit.description;
        let status = this.props.exhibit.status;
        let menuType;
        let text;
        if (status) {
            text = "Open for Collaboration"
        }
        else {
            text ="Not Open for Collaboration."
        }
        // let exhibit = this.props.exhibit;
        console.log(this.props);
        const meta = "Posted By: " + creator;
        return (
            <div>
                <Card onClick={this.props.exhibitClick}>
                    <Image src={image}/>
                    <Card.Content>
                        <Card.Header>{title}</Card.Header>
                        <Card.Meta>{creator}</Card.Meta>
                        <Card.Description>{description}</Card.Description>
                    </Card.Content>
                    <Card.Content>{text}</Card.Content>
                </Card>
            </div>
        )
    }
}
// export default GalleryViewExhibit;
const mapStateToProps = (state, props) => ({
});
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        exhibitClick: (event) => {
            event.preventDefault();
            let data = ownProps.exhibit;
            console.log(data);
            // dispatch(galleryActions.showExhibit(data));
            dispatch(galleryActions.exhibitFetch(data._id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryViewExhibit);