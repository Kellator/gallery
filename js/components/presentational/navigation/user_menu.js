import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { dispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dropdown, Menu } from 'semantic-ui-react';
// import ReactCSSTransitionGroup from 'react-transition-group';
// import { CSSTransitionGroup } from 'react-transition-group';
import {userMenuOptions} from './menu_options';
//separate local imports from dependencies
//declare propTypes prior to component

// Menu.propTypes = {

// }

// class UserMenu extends React.Component {
//     render() {
//         return (

//                 <Dropdown text='Menu'>
//                     <Dropdown.Menu>
//                         <Dropdown.Item text='Create an Exhibit' />
//                         <Dropdown.Item text='My Profile' />
//                         <Dropdown.Item text='My Gallery' />
//                         <Dropdown.Item text='My Messages' />
//                         <Dropdown.Divider />
//                         <Dropdown.Item text='Log Out' />
//                     </Dropdown.Menu>
//                 </Dropdown>

//         );
//     };
// };
const UserMenu = () => (
    <Dropdown placeholder="Menu" selection fluid options={userMenuOptions} />
)
  
export default UserMenu;

// class UserMenu extends React.Component {
//     render() {
//         console.log(this.props);
//         let menuState = this.props.userMenu.isOpen;
//         let menuType = this.props.className;
//         let menu;
//         let list;
//         // let menuName = this.props.title;
//         const clickHandler = () => {
//             alert("hello");
//         }
//         // console.log(menuType);
//         if (menuState == true) {
//             if (menuType == "user_menu") {
//                 list = <ul className="user_menu_list">
//                             <li><a href="#" value="view_gallery">View My Gallery</a></li>
//                             <li><a href="#" value="view_profile" onClick={click}>View My Profile</a></li>
//                             <li><a href="#" value="create_exhibit" onClick={click}>Create a New Exhibit</a></li>
//                             <li><a href="#" value="check_messages" onClick={click}>Check My Messages</a></li>
//                             <li><a href="#" value="log_out" onClick={click}>Log Out</a></li>
//                         </ul>
//             }
//             // if (menuType == "gallery_menu_list") {
//             //     list = <ul className="gallery_menu">
//             //                 <li>Share Exhibit</li>
//             //                 <li>Share Wall</li>
//             //                 <li>View Exhibit</li>
//             //             </ul>
//             // };
//             menu = <div>
//                         {list}
//                     </div>
//         }
//         else {
//             menu = "";
//         }
//         return (
//             <div className="menu">
//                 <button onClick={this.props.onClick} >{this.props.title}</button>
//                 <CSSTransitionGroup transitionName="menu" transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
//                     {menu}
//                 </CSSTransitionGroup>
//             </div>
//         )
//     }
// }
// //comments in map are examples - must be removed
// const mapStateToProps = (state, props) => ({
//     userMenu: {
//         isOpen: state.menu.userMenu.isOpen
//     }
// });


// export default connect(mapStateToProps)(UserMenu);

