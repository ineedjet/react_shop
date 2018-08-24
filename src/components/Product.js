import {Component} from "react";
import React from "react";

class Product extends Component {
  render() {
    return (
      <div>
       <h1>Product { this.props.id }</h1>
      </div>
    )
  }
}

export default Product;