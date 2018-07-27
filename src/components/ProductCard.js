import React, {Component} from 'react';
import Image from './Image';
import TextBox from './TextBox';
import Price from './Price';
import CartContext from './CartContext'

class ProductCard extends Component {
  render() {
    const {image, title, price} = this.props.product;

    return (
        <CartContext.Consumer>
          {cart => (
                <div>
                  <Image image={image}/>
                  <TextBox>{title}</TextBox>
                  <Price>{price}</Price>
                  <button onClick={() => cart.addToCart(this.props.product)}>Добавить в корзину</button>
                </div>
              )}
        </CartContext.Consumer>
    )
  }
}

export default ProductCard;
