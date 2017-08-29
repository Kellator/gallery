import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, initialize } from 'redux-form';
import { Form, Input } from 'semantic-ui-react';

class GallerySearch extends React.Component {
    render() {
        const { handleSubmit, pristine, reset, submitting, value } = this.props;
        return(
            <div>
                <Form onSubmit={handleSubmit(this.props.onSubmit)}>
                    <label htmlFor="gallery_search_input">Gallery Search</label>
                    <Field name="gallery_search_input" type="text" placeholder="Search..."icon="search" component="Input"/>
                </Form>
            </div>
        )
    }
}

GallerySearch = reduxForm({
    name: 'gallery_search',
    form: 'gallerySearch'
})(GallerySearch);

export default GallerySearch;