//  DISPLAYS INDIVIDUAL MESSAGE
import React from 'react';
import PropTypes from 'prop-types';

// Message.propTypes = {

// }
class Message extends React.Component {
    render () {
        console.log("message component");
        console.log(this.props);
        return (
            <div> 
                <div>
                    {this.props.username}
                </div>
                <div>
                    {this.props.message}
                </div>
            </div>
        );
    }
}
export default Message;