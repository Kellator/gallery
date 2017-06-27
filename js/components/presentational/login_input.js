//div that contains login input fields for email and password.  Also contains submit button
import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, initialize } from 'redux-form';
//separate local imports from dependencies


//declare propTypes prior to component

// LoginInput.propTypes = {

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


const LoginInput = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props
    console.log("login input");
    return (
        <div className="">
            <form onSubmit={handleSubmit}>
                <fieldset className="gallery_login">
                    <legend className="">Log In</legend>
                        <label htmlFor="email_login">Email</label>
                        <Field id="email_login" name="email" type="email" placeholder="you@email.com" component={renderField}/>
                        <label htmlFor="email_login_password">Password</label>
                        <Field id="email_login_password" name="password" type="text" placeholder="********" component={renderField}/>
                        <button action="submit">Login</button>
                </fieldset>
            </form>
        </div>
    );
}
export default reduxForm({
    form: 'login'
})(LoginInput);

                            // <label htmlFor="email_login">Email</label>
                            // <input id="email_login" type="email" name="userEmail" required></input>

                            // <label htmlFor="email_login_password">Password</label>
                            // <input id="email_login_password" type="password" name="password" required></input>