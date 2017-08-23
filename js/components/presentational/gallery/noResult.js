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
            </div>
        )
    }
}
export default NoResult;