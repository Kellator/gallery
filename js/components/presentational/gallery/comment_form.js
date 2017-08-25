import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, initialize } from 'redux-form';
import { Form, Button } from 'semantic-ui-react';

class CommentForm extends React.Component {
    render() {
        console.log(this.props);
        const {handleSubmit, pristine, reset, submitting} = this.props

        return (
            <Form onSubmit={handleSubmit(this.props.onSubmit)}>
                <div>
                    <label>Comment Text</label>
                    <div>
                        <Field
                            name="comment"
                            component="input"
                            type="text"
                            placeholder="Enter a comment..."
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
