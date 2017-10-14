// for artist to create exhibit
import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, initialize } from 'redux-form';
import Dropzone from 'react-dropzone';
import { Form, Button, TextArea } from 'semantic-ui-react';
import {FileUpload } from 'redux-file-upload';
//separate local imports from dependencies


//declare propTypes prior to component

// SignUpInput.propTypes = {

// }


class CreateExhibitForm extends React.Component {
    render() {
        console.log(this.props);
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
            <div>
                <h1>Create a New Exhibit:</h1>
                    <Form onSubmit={handleSubmit(this.props.onSubmit)}>
                        <div>
                            <label htmlFor="exhibit_title">Title</label>
                            <div>
                                <p>Give your passion a name:</p>
                                <Field name="exhibit_title" component="input" type="text" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="open_exhibit">Open for Collaboration</label>
                            <div>
                                <Field name="collaborate" id="open_exhibit" component="input" type="checkbox" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="exhibit_description">Description</label>
                            <div>
                                <p>Provide a brief description of your project in 250 characters or less:</p>
                                <Field name="exhibit_description" component="input" type="text" maxLength="250" required/>
                            </div>
                        </div>
                        {/* <div>
                            <Button type="submit" disabled={pristine || submitting}>Submit</Button>
                            <Button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</Button>
                        </div> */}
                    </Form>
            </div>
        )
    }    
}
export default reduxForm({
    form: 'create_exhibit',
    name: 'create_exhibit'
})(CreateExhibitForm);