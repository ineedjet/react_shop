import React, {Component} from 'react';
import {cartPath} from "../helpers/routes";
import Link from "./Link";

class CartCounter extends Component {
  render() {
    return (
      <p>
        <Link to={cartPath()}>В корзине: [cart.cartList.length]</Link>
      </p>
    )
  }
}

export default CartCounter;
