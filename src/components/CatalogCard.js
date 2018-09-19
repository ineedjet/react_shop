import React, {Component} from 'react';
import TextBox from './TextBox';
import Price from './Price';
import AddToCartButton from './AddToCartButton'
import Link from './Link';
import {productPath} from '../helpers/routes';

class CatalogCard extends Component {
  render() {
    const { title, price } = this.props.product.fields;
    const { id } = this.props.product.sys;

    return (
        <div style={{marginBottom: '40px'}}>
          <p>
            <Link to={productPath(id)}>
              <TextBox>{title}</TextBox>
            </Link>
          </p>
          <p>
            <Price>{price}</Price>
          </p>
          <p>
            <AddToCartButton product={this.props.product} />
          </p>
        </div>
    )
  }
}

export default CatalogCard;
