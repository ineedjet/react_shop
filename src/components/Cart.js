import React, {Component} from 'react';
import CartContext from './CartContext'
import CartItem from './CartItem'

class Cart extends Component {
  render() {
    return (
      <CartContext.Consumer>
        {cart => (
          <div>
            <h1>Cart</h1>
            { cart.cartList.map( (item, index) => (<CartItem key={`itemCard-${index}`} item={item} />) ) }
            <div>В корзине {cart.cartList.length} товаров</div>
          </div>
        )}
      </CartContext.Consumer>
    )
  }
}

export default Cart;
