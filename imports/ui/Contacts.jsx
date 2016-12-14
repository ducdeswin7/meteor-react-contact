import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import { ContactsDB } from '../api/contacts';
import ActionBar from './ActionBar';
import Contact from './Contact';

class Contacts extends Component {
    renderContacts() {
        return this.props.contacts.map((contact) => (
            <Contact key={contact._id} contact={contact}/>
        ))
    }

    render() {
        console.log(Meteor.user());
        return (
            <div>
                <ActionBar />
                <div className="tbl-header">
                    <table cellPadding="0" cellSpacing="0" frameBorder="0">
                        <thead>
                        <tr>
                            <th></th>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Email</th>
                            <th>Pays</th>
                            <th></th>
                        </tr>
                        </thead>
                    </table>
                </div>
                <div className="tbl-content">
                    <table cellPadding="0" cellSpacing="0" frameBorder="0">
                        <tbody>
                        {this.renderContacts()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default createContainer(() => {
    return {
        contacts: ContactsDB.find({}).fetch()
    };
}, Contacts)
