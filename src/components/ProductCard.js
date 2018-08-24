import React, {Component} from 'react';
import Image from './Image';
import TextBox from './TextBox';
import Price from './Price';
import AddToCartButton from './AddToCartButton'
import Link from './Link';
import {productPath} from '../helpers/routes';

class ProductCard extends Component {
  render() {
    const {image, title, price} = this.props.product;

    return (
        <div>
          <Link to={productPath()}>
            <Image image={image}/>
            <TextBox>{title}</TextBox>
          </Link>
          <Price>{price}</Price>
          <AddToCartButton product={this.props.product} />
        </div>
    )
  }
}

export default ProductCard;
