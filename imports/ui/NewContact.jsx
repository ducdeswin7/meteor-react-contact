import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';

import { Meteor } from 'meteor/meteor';

import  { ContactsDB }  from '../api/contacts';


class NewContact extends Component {

    componentDidMount() {
        console.log(this.props.currentUser);
    }

    handleSubmit(event) {
        event.preventDefault();

        const lastName = ReactDOM.findDOMNode(this.refs.last_name).value.trim();
        const firstName = ReactDOM.findDOMNode(this.refs.first_name).value.trim();
        const email = ReactDOM.findDOMNode(this.refs.email).value.trim();
        const country = ReactDOM.findDOMNode(this.refs.country).value.trim();

        ContactsDB.insert({
            lastName,
            firstName,
            email,
            country,
            owner: Meteor.userId(),
            createdAt: new Date()
        });

        ReactDOM.findDOMNode(this.refs.last_name).value = '';
        ReactDOM.findDOMNode(this.refs.first_name).value = '';
        ReactDOM.findDOMNode(this.refs.email).value = '';
        ReactDOM.findDOMNode(this.refs.country).value = '';
    }

    render() {
        return (
            <div className="form-container">
                <h2 className="title">Ajouter un nouveau contact</h2>

                <form className="form" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-type">
                        <div className="form-block">
                            <div className="form-row">
                                <label htmlFor="last_name">Nom *</label>
                                <input className="form-row-input" id="last_name" ref="last_name" type="text"/>
                            </div>
                            <div className="form-row">
                                <label htmlFor="first_name">Prénom *</label>
                                <input className="form-row-input" id="first" ref="first_name" type="text"/>
                            </div>
                        </div>
                        <div className="form-block">
                            <div className="form-row">
                                <label htmlFor="email">Email *</label>
                                <input className="form-row-input" id="email" ref="email" type="email"/>
                            </div>
                            <div className="form-row">
                                <label htmlFor="country">Pays *</label>
                                <input className="form-row-input" id="country" ref="country" type="text"/>
                            </div>
                        </div>
                    </div>

                    <div className="form-action">
                        <Link className="back" to="dashboard/contacts">Retour</Link>
                        <button className="add-button" type="submit">Ajouter un contact</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default createContainer(() => {
    return {
        currentUser: Meteor.user()
    };
}, NewContact)
