// for new users to sign up with email and password
//div that contains signup input input fields for email and password.  Also contains submit button.
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field, reduxForm, initialize } from 'redux-form';
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

class SignUpForm extends React.Component {
    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
            <div className="">
                <Form onSubmit={handleSubmit(this.props.onSubmit)}>
                    <fieldset className="gallery_signup">
                        <legend className="">Registration</legend>
                            <label htmlFor="username_signup">Username</label>
                            <Field id="username_signup" name="username" type="text" required placeholder="Enter your Username" component="input"/>
                            <label htmlFor="email_signup">Email</label>
                            <Field id="email_signup" name="email" type="email" required placeholder="Enter your Email" component="input"/>
                            <label htmlFor="password_signup">Password</label>
                            <Field id="password_signup" name="password" type="password" required placeholder="Enter your Password" component="input"/>
                            {/* <label htmlFor="match_password">Password</label>
                            <Field id="match_password" name="match_password" type="password" required placeholder="Re-Enter your Password" component="input"/> */}
                            <button action="submit">Join Gallery</button>
                    </fieldset>
                </Form>
            </div>
        );
    }
}
SignUpForm = reduxForm({
    form: 'signup'
})(SignUpForm);

export default SignUpForm;