// INPUT FOR REAL TIME MESSENGER
import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, initialize, reset } from 'redux-form';
import { Form, Button, Input, TextArea } from 'semantic-ui-react';

// MessageInput.propTypes = {

// }
// const handleSubmit = (event) => {
//     const {user, socket, activeChannel } = this.props;
//     const text = event.target.value.trim();
    
// }
export function SemanticReplyFormField ({ input, label, meta: { touched, error, warning }, as: As = TextArea, ...props}) {
    function handleChange (e,  {value}) {
        return input.onChange(value);
    }
    return (
        <div>
            <As {...input} value={input.value} {...props} onChange={handleChange} error={touched && error} />
            {touched && (warning && <span>{warning}</span>)}
        </div>
    )
}
class MessageInput extends React.Component {
    render() {
        console.log(this.props);
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
            <div className="">
                <Form reply onSubmit={handleSubmit(this.props.onSubmit)}>
                    <label htmlFor="message_input">Message Input</label>
                    {/* <Input type="text" id="message_input" placeholder="type a message..." /> */}
                    {/* <Button type="submit">Submit</Button> */}
                    <div>
                        <Field
                            name="message"
                            component={SemanticReplyFormField}
                            as={Form.TextArea}
                            placeholder="Type a message..."
                        />
                    </div>
                    <div>
                        <Button type="submit" disabled={pristine || submitting}>Submit</Button>
                        <Button type="submit" disabled={pristine || submitting} onClick={reset}>
                            Clear
                        </Button>
                    </div>
                </Form>
            </div>
        );
    };
};
export default reduxForm({
    name: 'message',
    form: 'message_input'
})(MessageInput);
// export default MessageInput;
