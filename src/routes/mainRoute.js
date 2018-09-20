import React from "react";
import { mainPath } from '../helpers/routes';
import CatalogContainer from '../components/CatalogContainer';

export default {
  name: 'Main',
  exact: true,
  strict: true,
  path: mainPath(),
  render: () => (<CatalogContainer/>)
};