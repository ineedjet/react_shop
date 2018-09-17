import React, {Component} from 'react';
import Image from './Image';
import TextBox from './TextBox';
import Price from './Price';
import AddToCartButton from './AddToCartButton'
import Link from './Link';
import {productPath} from '../helpers/routes';

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {bigImage: false};
    this.setBigImage = this.setBigImage.bind(this);
  }

  setBigImage(image) {
    this.setState({bigImage: image})
  }

  render() {
    const { title, price, images } = this.props.product.fields;
    const { id } = this.props.product.sys;

    return (
        <div>
          <p>
            { this.state.bigImage &&
              <Image key={`bigImage-${this.state.bigImage}`}
                     image={this.state.bigImage}
                     width = '400'
                     height = '300'
              />
            }
          </p>
          <p>
            { images.map( (image, index) => (
              <span onClick={() => this.setBigImage(image.sys.id)} key={`image-${image.sys.id}-${index}`}>
                <Image image={image.sys.id}
                       width = '150'
                       height = '100'
                />
              </span>
            ))}
          </p>
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
