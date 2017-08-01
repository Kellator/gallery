import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import App from './components/container/app';


export default class Routes extends React.Component {
    render() {
        return (
            <Router history={ history }>
                <App />
            </Router>
        )
    }
}

                // <div>
                //     <ul>
                //         <li><Link to="/">Landing</Link></li>
                //         <li><Link to="/gallery">Gallery</Link></li>
                //     </ul>
                //     <Switch>
                //     <Route exact path="/" component={LandingPage} /> 
                //     <Route exact path="/gallery" component={Dashboard} />
                //     </Switch>
                // </div>