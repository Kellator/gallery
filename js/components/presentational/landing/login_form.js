//div that contains login input fields for email and password.  Also contains submit button
import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, initialize } from 'redux-form';
//separate local imports from dependencies


//declare propTypes prior to component

// LoginInput.propTypes = {

// }

// //added from reduxForm tutorial example
// const form = reduxForm({
//     form: 'loginForm'   
// });

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


class LoginForm extends React.Component {
    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
            <div className="">
                <form onSubmit={handleSubmit(this.props.onSubmit)} >
                    <fieldset className="gallery_login">
                        <legend className="">Log In</legend>
                            <label htmlFor="username_login">Username</label>
                            <Field id="username_login" name="username" type="text" placeholder="Enter your Username" component="input"/>
                            <label htmlFor="email_login_password">Password</label>
                            <Field required id="password_login" name="password" type="password" required placeholder="Enter your Password" component="input"/>
                            
                            <button onClick={handleSubmit(this.props.onSubmit)} action="submit" disabled={pristine || submitting}>Login</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}
LoginForm = reduxForm({
    name: 'login',
    form: 'login'
})(LoginForm);

export default LoginForm;