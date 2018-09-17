import {Component} from "react";
import React from "react";
import ProductCard from './ProductCard';
import CartCounter from './CartCounter';

class Product extends Component {
  render() {
    const product = products.find( item => item.id === parseInt(this.props.id, 10) );

    return (
      <div>
        <h1>Product { product.id }</h1>
        <CartCounter/>
        <ProductCard product={product} />
      </div>
    )
  }
}

export default Product;