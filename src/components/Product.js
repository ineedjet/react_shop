import {Component} from "react";
import React from "react";
import ProductCard from './ProductCard';
import CartCounter from './CartCounter';
import request from "superagent";

const acessToken = '9608754a447d852210eb39d271a210f6a2901d3f8f3f52cebea8e814df94c839';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { product: false } ;
  }

  componentDidMount() {
    request
      .get(`https://cdn.contentful.com/spaces/hxpnkpcjx8zo/environments/master/entries/${this.props.id}`)
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