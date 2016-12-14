import React, { Component } from 'react';
import { Link } from 'react-router';


export default class ActionBar extends Component {
    render() {
        return (
            <div className="action-bar">
                <h2 className="title">Mes contact</h2>
                <Link to="/dashboard/new-contact" className="add-button">Nouveau contact</Link>
            </div>
        )
    }
}