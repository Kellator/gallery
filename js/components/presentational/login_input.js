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


class LoginInput extends React.Component {
    render() {
        console.log(this);
        const { handleSubmit, pristine, reset, submitting } = this.props;
        console.log(this.props.onSubmit);
        return (
            <div className="">
                <form onSubmit={handleSubmit(this.props.onSubmit)} >
                    <fieldset className="gallery_login">
                        <legend className="">Log In</legend>
                            <label htmlFor="email_login">Email</label>
                            <Field required id="email_login" name="email" type="email" placeholder="you@email.com" component="input"/>
                            <label htmlFor="email_login_password">Password</label>
                            <Field required id="email_login_password" name="password" type="password" placeholder="********" component="input"/>
                            <button action="submit">Login</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}
LoginInput = reduxForm({
    form: 'login'
})(LoginInput);

export default LoginInput;