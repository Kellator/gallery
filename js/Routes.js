import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LandingPage from './components/presentational/landing';
import GalleryApp from './components/presentational/app';


export default class Routes extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={ GalleryApp } />
                    <Route path="/welcome" component={ LandingPage } />
                </div>
            </Router>
        )
    }
}
