import React, {Component} from 'react';
import CartItem from './CartItem'
import CartFormContainer from "./CartFormContainer";

class Cart extends Component {
  render() {
    return (
      <div>
        <h1>Cart</h1>
        { this.props.cartList.map( (item, index) => (<CartItem key={`itemCard-${index}`} item={item} />) ) }
        <div>В корзине {this.props.cartList.length} товаров</div>
        <CartFormContainer/>
      </div>
    )
  }
}

export default Cart;
