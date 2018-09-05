import React from "react";
import { productPath } from '../helpers/routes';
import Product from "../components/Product";

export default {
  name: 'Product',
  exact: true,
  strict: true,
  path: productPath(),
  component: ({ match: { params }}) => (<Product id={params.id} />)
};