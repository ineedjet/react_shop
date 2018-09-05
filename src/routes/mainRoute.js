import React from "react";
import { mainPath } from '../helpers/routes';
import Catalog from '../components/Catalog';
import {products} from "../constants/Products";

export default {
  name: 'Main',
  exact: true,
  strict: true,
  path: mainPath(),
  component: () => (<Catalog products={products}/>)
};