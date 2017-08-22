import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { dispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import ReactCSSTransitionGroup from 'react-transition-group';
import { CSSTransitionGroup } from 'react-transition-group';
//separate local imports from dependencies
//declare propTypes prior to component

// Menu.propTypes = {

// }

class Menu extends React.Component {
    render() {
        // console.log(this.props);
        let menuState = this.props.menu.menuActive;
        let menuType = this.props.className;
        let menu;
        let list;
        let menuName = this.props.title;
        const click = () => {
            alert("hello");
        }
        // console.log(menuType);
        if (menuState == true) {
            if (menuType == "user_menu") {
                list = <ul className="user_menu_list">
                            <li><a href="#" onClick={click}>View My Gallery</a></li>
                            <li><a href="#" onClick={click}>View My Profile</a></li>
                            <li><a href="#" onClick={click}>Create a New Exhibit</a></li>
                            <li><a href="#" onClick={click}>Check My Messages</a></li>
                            <li><a href="#" onClick={click}>Log Out</a></li>
                        </ul>
            }
            if (menuType == "gallery_menu_list") {
                list = <ul className="gallery_menu">
                            <li>Share Exhibit</li>
                            <li>Share Wall</li>
                            <li>View Exhibit</li>
                        </ul>
            };
            menu = <div>
                        {list}
                    </div>
        }
        else {
            menu = "";
        }
        return (
            <div className="menu">
                <button onClick={this.props.onClick} >{this.props.title}</button>
                <CSSTransitionGroup transitionName="menu" transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
                    {menu}
                </CSSTransitionGroup>
            </div>
        )
    }
}
//comments in map are examples - must be removed
const mapStateToProps = (state, props) => ({
    menu: {
        menuActive: state.menu.menuActive,
        menu: state.menu.menu
    }
});


export default connect(mapStateToProps)(Menu);

