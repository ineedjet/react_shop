import React, {Component} from 'react';
import Image from './Image';
import TextBox from './TextBox';
import Price from './Price';
import AddToCartButton from './AddToCartButton'
import Link from './Link';
import {productPath} from '../helpers/routes';

class ProductCard extends Component {
  render() {
    const {id, image, title, price} = this.props.product;

    return (
        <div>
          <Link to={productPath(this.props.product.id)}>
            <Image image={image}/>
          </Link>
          <br/>
          <Link to={productPath(this.props.product.id)}>
            <TextBox>{title}</TextBox>
          </Link>
          {' '}
          <Price>{price}</Price>
          <br/>
          <AddToCartButton product={this.props.product} />
          <br/><br/>
        </div>
    )
  }
}

export default ProductCard;
