import React, {Component} from 'react';
import Image from './Image';
import TextBox from './TextBox';
import Price from './Price';
import AddToCartButton from './AddToCartButton'
import Link from './Link';
import {productPath} from '../helpers/routes';

class ProductCard extends Component {
  render() {
    const { title, price, images } = this.props.product.fields;
    const { id } = this.props.product.sys;

    return (
        <div>
          { images.map( (image, index) => (<Image key={`image-${index}`} image={image.sys.id} />) ) }
          <br/>
          <Link to={productPath(id)}>
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
