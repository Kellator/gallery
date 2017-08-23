// for artist to create exhibit
import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, initialize } from 'redux-form';
//separate local imports from dependencies


//declare propTypes prior to component

// SignUpInput.propTypes = {

// }
// image button and thumbnail selection not yet functional.
const imageButton = () => {
    return (
        <div>
            <img src="../../../../default_images/hand.jpeg" height="48" width="48" />
        </div>
    )
}
class CreateExhibitForm extends React.Component {
    render() {
        console.log(this.props);
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
            <div>
                <h1>Create a New Exhibit:</h1>
                    <form onSubmit={handleSubmit(this.props.onSubmit)}>
                        <div>
                            <label>Title</label>
                            <div>
                                <p>Give your passion a name:</p>
                                <Field name="exhibit_title" component="input" type="text" />
                            </div>
                        </div>
                        <div>
                            <label>Thumbnail Display</label> 
                            <div>
                                <p>Choose the image that best represents your piece or upload your own:</p>
                                <Field name="thumbnail_image" component={imageButton} >
                                    <option type="image" value="visual_art"  />
                                    <option type="image" value="audio"  />
                                    <option type="image" value="writing"  />
                                    <option type="image" value="artist_generated"  />
                                </Field>
                            </div>
                        </div>
                        <div>
                            <label>Type</label>
                            <div>
                                <p>Select your genre from these categories:</p>
                                <Field name="exhibit_type" component="select" required>
                                    <option></option>
                                    <option value="visual">Visual Art</option>
                                    <option value="music">Music</option>
                                    <option value="writing">Creative Writing</option>
                                </Field>
                            </div>
                        </div>
                        <div>
                            <label>Open for Collaboration</label>
                            <div>
                                <Field name="collaborate" id="open_exhibit" component="input" type="checkbox" />
                            </div>
                        </div>
                        <div>
                            <label>Description</label>
                            <div>
                                <p>Provide a brief description of your piece in 250 characters or less:</p>
                                <Field name="exhibit_description" component="input" type="text" maxLength="250" required/>
                            </div>
                        </div>
                        <div>
                            <label>Location</label>
                            <div>
                                <p>Add a link to your exhibit location:</p>
                                <Field name="exhibit_url" component="input" type="text" />
                            </div>
                        </div>
                        <div>
                            <button type="submit" disabled={pristine || submitting}>Submit</button>
                            <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
                        </div>
                    </form>
            </div>
        )
    }    
}

export default reduxForm({
    form: 'create_exhibit',
    name: 'create_exhibit'
})(CreateExhibitForm);