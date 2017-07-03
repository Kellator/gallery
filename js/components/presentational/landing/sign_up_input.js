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

class SignUpInput extends React.Component {
    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
            <div className="">
                <form onSubmit={handleSubmit(this.props.onSubmit)}>
                    <fieldset className="gallery_signup">
                        <legend className="">Sign Up</legend>
                            <label htmlFor="email_signup">Email</label>
                            <Field id="email_signup" name="email" type="email" placeholder="you@email.com" component="input"/>
                            <label htmlFor="email_signup_password">Password</label>
                            <Field id="email_signup_password" name="password" type="password" placeholder="********" component="input"/>
                            <button action="submit">Join Gallery</button>
                    </fieldset>
                </form>
            </div>
        );
    }
}
SignUpInput = reduxForm({
    form: 'signup'
})(SignUpInput);

export default SignUpInput;