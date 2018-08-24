import {Component} from "react";
import React from "react";
import {products} from '../constants/Products';
import ProductCard from './ProductCard';
import Cart from './Cart';

class Product extends Component {
  render() {
    const product = products.find( item => item.id === parseInt(this.props.id, 10) );

    return (
      <div>
        <h1>Product { product.id }</h1>
        <Cart/>
        <ProductCard product={product} />
      </div>
    )
  }
}

export default Product;