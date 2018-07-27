import React, {Component} from 'react';
import Image from './Image';
import TextBox from './TextBox';
import Price from './Price';

class ProductCard extends Component {
  render() {
    const {image, title, price} = this.props.product

    return (
        <div>
          <Image image={image}/>
          <TextBox>{title}</TextBox>
          <Price>{price}</Price>
          <button>Добавить в корзину</button>
        </div>
    )
  }
}

export default ProductCard;
