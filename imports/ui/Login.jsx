import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import { Accounts } from 'meteor/accounts-base';

import { Meteor } from 'meteor/meteor';

export default class Register extends Component {

    submitLoginAction(event) {
        event.preventDefault();

        const email = ReactDOM.findDOMNode(this.refs.email).value.trim(),
            password = ReactDOM.findDOMNode(this.refs.password).value.trim();

        if (!email || !password) {
            throw new Error('you have to enter email or password');
        }
        console.log(email, password);

        Meteor.loginWithPassword(email, password, function (error) {
                if (error) {
                    console.log('there was an error : ' + error.reason);
                }

                else {
                    browserHistory.push('dashboard/contacts')
                }
            }
        )
    }

    render() {
        return (
            <form onSubmit={this.submitLoginAction.bind(this)}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input placeholder="Email" ref="email" type="email" id="email" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input placeholder="Password" ref="password" type="password" id="password" className="form-control"/>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Se connecter</button>
                </div>
            </form>
        )
    }
}