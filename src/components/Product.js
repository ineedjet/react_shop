import {Component} from "react";
import React from "react";

class Product extends Component {
  render() {
    return (<div>Product id is { this.props.id }</div>)
  }
}

export default Product;