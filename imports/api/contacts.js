import { Mongo } from 'meteor/mongo';

export const ContactsDB = new Mongo.Collection('contactsDB');

let Schemas = {};

Schemas.Contact = new SimpleSchema({
    firstName: {
        type: String,
        label: "first_name",
    },
    lastName: {
        type: String,
        label: "last_name"
    },
    email: {
        type: String,
        label: "email",
    },
    country: {
        type: String,
        label: "country",
    },
    owner: {
        type: String,
        label: "owner",
    },
    createdAt: {
        type: Date,
        label: "contact creacted at"
    },
});

ContactsDB.attachSchema(Schemas.Contact);
