import React from "react";
import { contactsPath } from '../helpers/routes';
import Contacts from '../components/Contacts';

export default {
  name: 'Contacts',
  exact: true,
  strict: true,
  path: contactsPath(),
  component: Contacts
};