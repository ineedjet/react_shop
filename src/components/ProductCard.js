import React, {Component} from 'react';
import TextBox from './TextBox';
import Price from './Price';
import AddToCartButton from './AddToCartButton'
import Link from './Link';
import ImagesGallery from './ImagesGallery';
import {productPath} from '../helpers/routes';

class ProductCard extends Component {
  render() {
    const { title, price, images } = this.props.product.fields;
    const { id } = this.props.product.sys;

    return (
        <div>
          <ImagesGallery images={images} />
          <p>
            <Link to={productPath(id)}>
              <TextBox>{title}</TextBox>
            </Link>
            {' '}
            <Price>{price}</Price>
          </p>
          <p>
            <AddToCartButton product={this.props.product} />
          </p>
        </div>
    )
  }
}

export default ProductCard;
