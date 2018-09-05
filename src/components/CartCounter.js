import React, {Component} from 'react';
import CartContext from './CartContext'

class CartCounter extends Component {
  render() {
    return (
      <CartContext.Consumer>
        {cart => (<span> Корзина {cart.cartList.length} <br/><br/></span>)}
      </CartContext.Consumer>
    )
  }
}

export default CartCounter;
