import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { dispatch } from 'react-redux';
// import ReactCSSTransitionGroup from 'react-transition-group';
import { CSSTransitionGroup } from 'react-transition-group'
//separate local imports from dependencies
//declare propTypes prior to component

// Menu.propTypes = {

// }
class Menu extends React.Component {
    render() {
        console.log(this.props);
        let menuState = this.props.displayState.menuActive;
        let menu;
        let list;
        let menuName = this.props.title;
        if (menuState == true) {
            menu = <div>
                        <ul>
                            <li>View My Gallery</li>
                            <li>Check My Messages</li>
                            <li>Log Out</li>
                        </ul>
                    </div>
        }
        else {
            menu = "";
        }
        return (
            <div className="menu">
                <button className="user_menu" onClick={this.props.onClick} >{this.props.title}</button>
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
        menuActive: state.menu.menuActive
    }
});


export default connect(mapStateToProps)(Menu);