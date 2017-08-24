// INPUT FOR REAL TIME MESSENGER
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from 'semantic-ui-react';

// MessageInput.propTypes = {

// }

class MessageInput extends React.Component {
    render() {
        return (
            <div className="">
                <Form>
                    <label htmlFor="message_input">Message Input</label>
                    <Input type="text" id="message_input" placeholder="type a message..." />
                    <Button type="submit">Submit</Button>
                </Form>
            </div>
        );
    };
};

export default MessageInput;