// for new users to sign up with email and password
//div that contains signup input input fields for email and password.  Also contains submit button.
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';
//separate local imports from dependencies


//declare propTypes prior to component

// SignUpInput.propTypes = {

// }

export default class SignUpInput extends React.Component {
    render() {
        return (
            <div className="">
                <form className="">
                    <fieldset className="gallery_signup">
                        <legend className="">Log In</legend>
                            <label htmlFor="email_signup">Email</label>
                            <input id="email_signup" type="email" required></input>

                            <label htmlFor="email_signup_password">Password</label>
                            <input id="email_signup_password" type="password" required></input>

                            <button className="" type="submit">Login</button>
                    </fieldset>
                </form>
            </div>
        );
    }
}