import React, {Component} from 'react';
import CartContext from './CartContext'

class Cart extends Component {
  render() {
    return (
        <CartContext.Consumer>
          {cart => (<span> Корзина {cart.cartList.length} </span>)}
        </CartContext.Consumer>
    )
  }
}

export default Cart;
