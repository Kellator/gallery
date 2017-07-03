import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import LandingPage from './components/container/landing';
import GalleryApp from './components/container/app';
import LoginBlock from './components/presentational/landing/login_block';


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
                    <Switch>
                    <Route exact path="/" component={LandingPage} /> 
                    <Route exact path="/gallery" component={GalleryApp} />
                    </Switch>
                </div>
            </Router>
        )
    }
}
