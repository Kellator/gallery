//  DISPLAYS INDIVIDUAL MESSAGE
import React from 'react';
import PropTypes from 'prop-types';

// Message.propTypes = {

// }
class Message extends React.Component {
    render () {
        console.log("message component");
        let time;
        let user;
        let text;
        return (
            <div> 
                <p>({time}) {user} : {text}</p>
            </div>
        )
    }
}
export default Message;