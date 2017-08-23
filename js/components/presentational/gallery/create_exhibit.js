// for artist to create exhibit
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field, reduxForm, initialize } from 'redux-form';
//separate local imports from dependencies


//declare propTypes prior to component

// SignUpInput.propTypes = {

// }
// default images for selection
// data stored with exhibit but not entered by user - creatorId

// array of default image urls that will be linked in form for selection
const defaultImages = [ 'art', 'sound', 'text'];

const CreateExhibitForm = (props) => {
    // const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
        <div><p>I'm a test div for create form</p></div>
        // <form onSubmit={handleSubmit} >
        //     <div>
        //         <label>Title</label>
        //         <div>
        //             <p>Give your passion a name:</p>
        //             <Field name="exhibit_title" component={input} type="text" />
        //         </div>
        //     </div>
        //     {/* this div - chose thumbnail image display - upload of chose default */}
        //     {/* currently set as text entry but have 3 default images as buttons then one for upload own - makes link for image */}
        //     <div>
        //         <label>Thumbnail Display</label> 
        //         <div>
        //             <p>Choose the image that best represents your piece or click <span>Upload my own Images</span></p>
        //             <Field name="exhibit_image" component={input} type="text" />
        //         </div>
        //     </div>
        //     <div>
        //         <label>Type</label>
        //         <div>
        //             <p>Select your genre from these categories:</p>
        //             <Field name="exhibit_type" component="select">
        //                 <option></option>
        //                 <option value="visual">Visual Art</option>
        //                 <option value="music">Music</option>
        //                 <option value="writing">Creative Writing</option>
        //             </Field>
        //         </div>
        //     </div>
        //     <div>
        //         <label>Open for Collaboration</label>
        //         <div>
        //             <Field name="collaborate" id="open_exhibit" component="input" type="checkbox"/>
        //         </div>
        //     </div>
        //     <div>
        //         <label>Description</label>
        //         <div>
        //             <p>Provide a brief description of your piece in 250 characters or less:</p>
        //             <Field name="exhibit_description" component={input} type="text" maxlength="250" />
        //         </div>
        //     </div>
        //     <div>
        //         <button type="submit" disabled={pristine || submitting}>Submit</button>
        //         <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
        //     </div>
        // </form>
    )
}

export default reduxForm({
    form: 'create_exhibit',
    name: 'create_exhibit'
})(CreateExhibitForm);