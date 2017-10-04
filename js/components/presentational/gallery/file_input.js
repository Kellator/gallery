import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, initialize } from 'redux-form';
import Dropzone from 'react-dropzone';
import { Form, Button, TextArea } from 'semantic-ui-react';


class FileInputForm extends React.Component {
    render() {
      const {
        handleSubmit,
        resetForm,
        submitting
      } = this.props
      return (<Field onSubmit={handleSubmit}>
          <div>
            <label>Image Files</label>
            <div>
              <input type="file" value={ null } />
            </div>
          </div>
          <div>
            <button type="submit" disabled={submitting}>
              {submitting ? <i/> : <i/>} Submit
            </button>
            <button type="button" disabled={submitting} onClick={resetForm}>
              Clear Values
            </button>
          </div>
        </Field>
      )
    }
  }
  
  // FileInputForm.propTypes = {
  //   fields: PropTypes.object.isRequired,
  //   handleSubmit: PropTypes.func.isRequired,
  //   resetForm: PropTypes.func.isRequired,
  //   submitting: PropTypes.bool.isRequired
  // }
  
  // export default reduxForm({
  //   form: 'file',
  //   fields
  // })(FileInputForm)
  export default FileInputForm;