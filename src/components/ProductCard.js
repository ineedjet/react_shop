import React, {Component} from 'react';
import Image from './Image';
import TextBox from './TextBox';
import Price from './Price';
import AddToCartButton from './AddToCartButton'

class ProductCard extends Component {
  render() {
    const {image, title, price} = this.props.product;

    return (
        <div>
          <Image image={image}/>
          <TextBox>{title}</TextBox>
          <Price>{price}</Price>
          <AddToCartButton product={this.props.product} />
        </div>
    )
  }
}

export default ProductCard;
