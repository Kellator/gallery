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
                            <label htmlFor="email_login">Email</label>
                            <input id="email_login" type="email" name="userEmail" required></input>

                            <label htmlFor="email_login_password">Password</label>
                            <input id="email_login_password" type="password" name="password" required></input>

                            <button className="" type="submit">Login</button>
                    </fieldset>
                </form>
            </div>
        );
    }
}

// export default class LoginInput extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             userEmail: "user@email.com",
//             password: "password"
//         };

//         this.handleInputChange = this.handleInputChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//     handleInputChange(event) {
//         const target = event.target;
//         const value = target.value;
//         const name = target.name;

//         this.setState({
//             [name]: value
//         });
//         console.log(this.state);
//     }
//     render() {
//         return (
//             <div className="">
//                 <form className="" onSubmit={this.handleSubmit}>
//                     <fieldset className="gallery_login">
//                         <legend className="">Log In</legend>
//                             <label htmlFor="email_login">Email</label>
//                             <input id="email_login" type="email" name="userEmail" required onChange={this.handleInputChange} value={this.state.value}></input>

//                             <label htmlFor="email_login_password">Password</label>
//                             <input id="email_login_password" type="password" name="password" required onChange={this.handleInputChange} value={this.state.value}></input>

//                             <button className="" type="submit">Login</button>
//                     </fieldset>
//                 </form>
//             </div>
//         );
//     }
// }