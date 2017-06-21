import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LandingPage from './components/presentational/landing';
import GalleryApp from './components/presentational/app';
import LoginBlock from './components/presentational/login_block';


export default class Routes extends React.Component {
    render() {
        return (
            <Router history={ history }>
                <div>
                    <Route exact path="/" component={LandingPage} /> 
                </div>
            </Router>
        )
    }
}
