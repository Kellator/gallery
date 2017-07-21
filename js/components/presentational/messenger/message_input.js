// INPUT FOR REAL TIME MESSENGER
import React from 'react';
import PropTypes from 'prop-types';
//declare propTypes prior to component

//separate local imports from dependencies

// MessageInput.propTypes = {

// }

class MessageInput extends React.Component {
    render() {
        <div className="">
            <form >
                <fieldset>
                    <legend>Messenger</legend>
                        <label htmlFor="">Message Input</label>
                        <input type="text" placeholder="type a message..." />
                        <input type="submit" />
                </fieldset>
            </form>
        </div>
    }
}

export default MessageInput;