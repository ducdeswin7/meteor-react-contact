import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Main extends Component {
    render() {
        return (
            <div className="main-container">
                <nav className="header" role="navigation">
                    <Link to={"/"}>Home</Link>
                    <Link activeClassName="active" to={"/dashboard/contacts"}>Mes contacts</Link>
                    <Link to={"/"}>Reporting</Link>
                    <Link to={"/"}>Parametres</Link>
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