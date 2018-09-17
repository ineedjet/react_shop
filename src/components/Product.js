import {Component} from "react";
import React from "react";
import ProductCard from './ProductCard';
import CartCounter from './CartCounter';
import {acessToken, spaces, environments} from '../constants/access';
import request from "superagent";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { product: false } ;
  }

  componentDidMount() {
    request
      .get(`https://cdn.contentful.com/spaces/${spaces}/environments/${environments}/entries`)
      .set('Authorization', `Bearer ${acessToken}`)
      .then(({body}) => {
        this.setState({ product: body })
      });
  }

  render() {
    return (
      <div>
        <h1>Product { this.state.product && this.state.product.fields.id }</h1>
        <CartCounter/>
        { this.state.product && <ProductCard product={this.state.product} />}
      </div>
    )
  }
}

export default Product;