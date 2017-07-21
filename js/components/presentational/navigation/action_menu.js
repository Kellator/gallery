import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { dispatch } from 'react-redux';
// import ReactCSSTransitionGroup from 'react-transition-group';
import { CSSTransitionGroup } from 'react-transition-group';
//separate local imports from dependencies
//declare propTypes prior to component

// Menu.propTypes = {

// }
class Menu extends React.Component {
    render() {
        console.log(this.props);
        let menuState = this.props.displayState.menuActive;
        let menuType = this.props.className;
        let menu;
        let list;
        let menuName = this.props.title;
        console.log(menuType);
        if (menuState == true) {
            if (menuType == "user_menu") {
                list = <ul className="user_menu_list">
                            <li>View My Gallery</li>
                            <li>View Gallery Walls</li>
                            <li>Check My Messages</li>
                            <li>Log Out</li>
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
    displayState: {
        menuActive: state.menu.menuActive,
        menu: state.menu.menu
    }
});


export default connect(mapStateToProps)(Menu);

//         if ( (menuType == "user_menu") && (menuState == true ) ) {
//             menu = <div>
//                         <ul className="user_menu">
//                             <li>View My Gallery</li>
//                             <li>Check My Messages</li>
//                             <li>Log Out</li>
//                         </ul>
//                     </div>
//         }
//         if ( (menuType == "gallery_menu") && (menuState == true ) ) {
//             menu = <div>
//                         <ul className="gallery_menu">
//                             <li>Share Exhibit</li>
//                             <li>Share Wall</li>
//                             <li>View Exhibit</li>
//                         </ul>
//                     </div>
//         }
        // if (menuState == true) {
        //     menu = <div>
        //                 {list}
        //             </div>
        // }