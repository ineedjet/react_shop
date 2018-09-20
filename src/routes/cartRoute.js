import React from "react";
import { cartPath } from '../helpers/routes';
import CartContainer from "../components/CartContainer";

export default {
  name: 'Cart',
  exact: true,
  strict: true,
  path: cartPath(),
  render: () => <CartContainer />
};