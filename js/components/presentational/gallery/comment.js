import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, initialize } from 'redux-form';

const CommentForm = props => {
    const {handleSubmit, pristine, reset, submitting} = props
    console.log(props);
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Comment Text</label>
                <div>
                    <Field
                        name="comment"
                        component="input"
                        type="text"
                        placeholder="Enter a comment"
                    />
                </div>
                <div>
                    <button type="submit" disabled={pristine || submitting}>Submit</button>
                    <button type="submit" disabled={pristine || submitting} onClick={reset}>
                        Clear
                    </button>
                </div>
            </div>
        </form>
    )
}

export default reduxForm({
    name: 'comment',
    form: 'comment_form'
})(CommentForm);
// (comment => {
//     console.log(comment);
//     dispatch(commentUpdate(comment));
//     })}