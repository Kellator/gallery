import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import LandingPage from './components/container/landing';
import Dashboard from './components/container/dashboard';
import LoginBlock from './components/presentational/landing/login_block';
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
// const requireAuth = (nextState, replace) => {
//     if (!checkAuth()) {
//         return replace (null, '/login')
//     }
// }
// const Routes = (
//     <Route path='/' component={App}>
//         <IndexRoute component={} />
//         {/* will need to pass in props to determing log in or sign up? */}
//         <Route path='/login' component={LandingPage} /> 
//         {/* <Route path='/register' component={LandingPage} /> */}
//         <Route pasth='/gallery' component={GalleryApp} />
//     </Route>
// )

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