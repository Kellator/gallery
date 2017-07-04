import React from 'react';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { bindActionCreators } from 'redux';
// import { dispatch } from 'react-redux';
import { Field, reduxForm, initialize } from 'redux-form';

class GallerySearch extends React.Component {
    render() {
        console.log(this.props);
        const { handleSubmit, pristine, reset, submitting, value } = this.props;
        console.log(this.props.value);
        return(
            <div>
                <form onSubmit={handleSubmit(this.props.onSubmit)}>
                    <fieldset className="gallery_search">
                        <legend >Gallery Search</legend>
                        <label htmlFor="gallery_search_input">Gallery Search</label>
                        <Field id="gallery_search_input" name="gallery_search_input" type="text" placeholder="illustration" component="input"/>
                    </fieldset>
                </form>
            </div>
        )
    }
}

GallerySearch = reduxForm({
    form: 'gallery_search'
})(GallerySearch);

export default GallerySearch;