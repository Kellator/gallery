import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, initialize } from 'redux-form';
import { Form, Button, Input, TextArea } from 'semantic-ui-react';

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
class CommentForm extends React.Component {
    render() {
        console.log(this.props);
        const {handleSubmit, pristine, reset, submitting} = this.props

        return (
            <Form reply onSubmit={handleSubmit(this.props.onSubmit)}>
                <div>
                    <label>Comment Text</label>
                   <div>
                        <Field
                            name="comment"
                            component={SemanticReplyFormField}
                            as={Form.TextArea}
                            placeholder="Comment..."
                        />
                    </div>
                    <div>
                        <Button type="submit" disabled={pristine || submitting}>Submit</Button>
                        <Button type="submit" disabled={pristine || submitting} onClick={reset}>
                            Clear
                        </Button>
                    </div>
                </div>
            </Form>
        )
    }
}

export default reduxForm({
    name: 'comment',
    form: 'comment_form'
})(CommentForm);

