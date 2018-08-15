import React, {Component} from 'react';
import CartContext from "./CartContext";

class AddToCartButton extends Component {
  render() {

    return (
      <CartContext.Consumer>
        {cart => (
          <button onClick={() => cart.addToCart(this.props.product)}>Добавить в корзину</button>
        )}
      </CartContext.Consumer>
    )
  }
}

export default AddToCartButton;
