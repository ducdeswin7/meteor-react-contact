import React, { Component, PropTypes } from 'react';

import { ContactsDB } from '../api/contacts';

export default class Contact extends Component {
    deleteContact() {
        ContactsDB.remove(this.props.contact._id)
    }

    render() {
        return(
            <tr>
                <td><input type="checkbox"/></td>
                <td>{this.props.contact.lastName}</td>
                <td>{this.props.contact.firstName}</td>
                <td>{this.props.contact.email}</td>
                <td>{this.props.contact.country}</td>
                <td><i className="material-icons"
                       onClick={this.deleteContact.bind(this)} >
                    delete_forever</i>
                </td>
            </tr>
        )
    }
}
