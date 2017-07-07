import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { dispatch } from 'react-redux';
// import ReactCSSTransitionGroup from 'react-transition-group';
import { CSSTransitionGroup } from 'react-transition-group'
//separate local imports from dependencies
import * as actions from '../../actions/index';
//declare propTypes prior to component

// Menu.propTypes = {

// }
class Menu extends React.Component {
    // onClick(menuState) {
    //     newState = !menuState;
    //     console.log(newState);
    //     return newState;
    // };
    render() {
        console.log(this.props);
        let menuState = this.props.displayState.menuActive;
        console.log(menuState);
        console.log(this.props.displayState);
        let menu;
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
                <button className="user_menu" onClick={this.props.onClick}>User Menu</button>
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
const mapDispatchToProps = (dispatch, ownProps) => {
    return { 
        onClick: () => {
            event.preventDefault();
            console.log(ownProps);
            // dispatch(actions.toggleMenu());
            console.log("menu clicked")
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);