import React, {Component} from 'react';
import CartContext from './CartContext'
import {cartPath} from "../helpers/routes";
import Link from "./Link";

class CartCounter extends Component {
  render() {
    return (
      <CartContext.Consumer>
        {cart => (
          <p>
            <Link to={cartPath()}>В корзине: {cart.cartList.length}</Link>
          </p>
        )}
      </CartContext.Consumer>
    )
  }
}

export default CartCounter;
