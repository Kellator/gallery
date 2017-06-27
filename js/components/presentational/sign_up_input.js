// for new users to sign up with email and password
//div that contains signup input input fields for email and password.  Also contains submit button.
import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, initialize } from 'redux-form';
//separate local imports from dependencies


//declare propTypes prior to component

// SignUpInput.propTypes = {

// }

//added from reduxForm tutorial example
const form = reduxForm({
    form: 'loginForm'   
});

const renderField = field => (
    <div>
        <label>{field.input.label}</label>
        <input {...field.input}/>
        {field.touched && field.error && <div className="error">{field.error}</div>}
    </div>
);

const renderSelect = field => (
    <div>
        <label>{field.input.label}</label>
        <select {...field.input}/>
        {field.touched && field.error && <div className="error">{field.error}</div>}
    </div>
);

const SignUpInput = (props) => {
    console.log("signup input");
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <div className="">
            <form onSubmit={handleSubmit}>
                <fieldset className="gallery_signup">
                    <legend className="">Log In</legend>
                        <label htmlFor="email_signup">Email</label>
                        <Field id="email_signup" name="email" type="email" component={renderField}/>
                        <label htmlFor="email_signup_password">Password</label>
                        <Field id="email_signup_password" name="password" type="text" component={renderField}/>
                        <button action="submit" disabled={pristine || submitting}>Login</button>
                </fieldset>
            </form>
        </div>
    );
}
export default reduxForm({
    form: 'signup'
})(SignUpInput);
