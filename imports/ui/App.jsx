import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Main from './Main';
import Home from './Home';
import Contacts from './Contacts';
import NewContact from './NewContact';
import Register from './Register';

export default class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Main}>
                    <Route path="dashboard/contacts" component={Contacts}/>
                    <Route path="dashboard/new-contact" component={NewContact}/>
                    <Route path="register" component={Register}/>
                    <IndexRoute component={Home} />
                </Route>
            </Router>
        )
    }
}