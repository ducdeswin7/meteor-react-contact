import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

import { Meteor } from 'meteor/meteor';

export default class Main extends Component {
    logoutUser() {
        Meteor.logout();
        browserHistory.push('dashboard/contacts')
    }

    render() {
        return (
            <div className="main-container">
                <nav className="header" role="navigation">
                    <Link to={"/"}>Home</Link>
                    <Link activeClassName="active" to={"/dashboard/contacts"}>Mes contacts</Link>
                    {Meteor.user() ?
                        <Link to={"/"}>Reporting</Link>
                        : <Link to={"register"}>S'inscrire</Link>
                    }

                    {Meteor.user() ?
                        <Link to={"/"}>Reporting</Link>
                        : <Link to={"login"}>Connexion</Link>
                    }
                    {Meteor.user() ?
                        <a onClick={this.logoutUser.bind(this)} ref="logout">Logout</a>
                        : ''
                    }
                </nav>
                <div className="container">
                    <div className="content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}