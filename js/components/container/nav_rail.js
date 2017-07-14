//navigation bar at top of page. L- Search Gallery input field  C - logo  R - usermenu
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { dispatch } from 'react-redux';
//separate local imports from dependencies
import GallerySearch from '../presentational/navigation/gallery_search';
import GalleryLogo from '../presentational/landing/gallery_logo';
import Menu from '../presentational/navigation/action_menu';
import * as actions from '../../actions/index';

class NavBar extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <GallerySearch onSubmit={this.props.onSubmit}/>
                <GalleryLogo />
                <Menu title={"Menu A"} id={"user_menu"} onClick={this.props.onClickA}/>
                <Menu title={"Menu B"} id={"gallery_menu"} onClick={this.props.onClickB}/>
            </div>
        );
    }
}
const mapStateToProps = (state, props) => ({
   
});
const mapDispatchToProps = (dispatch, ownProps) => {
    return { 
        onSubmit:() => {
            event.preventDefault();
        },
        onClickA: () => {
            event.preventDefault();
            console.log(this);
            dispatch(actions.toggleMenu());
            console.log("Button A Clicked");
        },
        onClickB: () => {
            event.preventDefault();
            dispatch(actions.toggleMenu());
            console.log("Button B Clicked");
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);