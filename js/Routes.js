import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LandingPage from './components/container/landing';
import GalleryApp from './components/container/app';
import LoginBlock from './components/presentational/login_block';


export default class Routes extends React.Component {
    render() {
        return (
            <Router history={ history }>
                <div>
                    <ul>
                        <li><Link to="/">Landing</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        {/*<li><Link to="/topics">Topics</Link></li>*/}
                    </ul>
                    <Route exact path="/" component={LandingPage} /> 
                    <Route path="/gallery" component={GalleryApp} />
                </div>
            </Router>
        )
    }
}
