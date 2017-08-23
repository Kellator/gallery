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
                    <fieldset>
                        <legend>Messenger</legend>
                            <label htmlFor="">Message Input</label>
                            <Input type="text" placeholder="type a message..." />
                            <Button type="submit">Submit</Button>
                    </fieldset>
                </Form>
            </div>
        );
    };
};

export default MessageInput;