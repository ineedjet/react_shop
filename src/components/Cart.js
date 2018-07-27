import React, {Component} from 'react';
import CartContext from './CartContext'

class Cart extends Component {
  render() {
    return (
        <CartContext.Consumer>
          {cartList => (<span> Корзина {cartList.length} </span>)}
        </CartContext.Consumer>
    )
  }
}

export default Cart;
