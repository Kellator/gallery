import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, initialize } from 'redux-form';
import Dropzone from 'react-dropzone';
import { Form, Button, TextArea } from 'semantic-ui-react';


class FileInputForm extends React.Component {
    render() {

      const {
        handleSubmit,
        fileOnChange,
        resetForm,
        submitting,
        value,
      } = this.props

        
      return (
        <Form onChange={fileOnChange}>       
              <div>
                <label>Image Files</label>
                <div>
                  <input 
                  type="file" 
                  />
                </div>
              </div>
              <div>
                <Button type="submit" disabled={submitting}>
                  {submitting ? <i/> : <i/>} Submit
                </Button>
                <Button type="button" disabled={submitting} onClick={resetForm}>
                  Clear Values
                </Button>
              </div>          
          </Form>
      )
    }
  }
  export default FileInputForm;
  // FileInputForm.propTypes = {
  //   fields: PropTypes.object.isRequired,
  //   handleSubmit: PropTypes.func.isRequired,
  //   resetForm: PropTypes.func.isRequired,
  //   submitting: PropTypes.bool.isRequired
  // }
  
  // export default reduxForm({
  //   form: 'file',
  //   name: 'file'
  // })(FileInputForm)
