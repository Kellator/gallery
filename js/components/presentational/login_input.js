//div that contains login input fields for email and password.  Also contains submit button
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';
//separate local imports from dependencies


//declare propTypes prior to component

// LoginInput.propTypes = {

// }

export default class LoginInput extends React.Component {
    render() {
        return (
            <div className="">
                <form className="">
                    <fieldset className="gallery_login">
                        <legend className="">Log In</legend>
                            <label for="email_login">Email</label>
                            <input id="email_login" type="email" required></input>

                            <label for="email_login_password">Password</label>
                            <input id="email_login_password" type="password" required></input>

                            <button className="" type="submit">Login</button>
                    </fieldset>
                </form>
            </div>
        );
    }
}