import React from "react";
import { mainPath } from '../helpers/routes';
import Catalog from '../components/Catalog';

export default {
  name: 'Main',
  exact: true,
  strict: true,
  path: mainPath(),
  render: () => (<Catalog/>)
};