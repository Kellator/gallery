import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { dispatch } from 'react-redux';
import { connect } from 'react-redux';

class NoResult extends React.Component {
    render() {
        return (
            <div>
                <h3>Sorry!  Your search has returned no results.  Please try again.</h3>
                <h4>If you need an idea of what to look for, check out the list of categories in the menu.</h4>
            </div>
        )
    }
}
export default NoResult;