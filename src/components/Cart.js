import React, {Component} from 'react';
import CartContext from './CartContext'

class Cart extends Component {
  render() {
    return (
      <CartContext.Consumer>
        {cart => (
          <p>
            <h1>Cart</h1>
            Корзина {cart.cartList.length}
          </p>
        )}
      </CartContext.Consumer>
    )
  }
}

export default Cart;
