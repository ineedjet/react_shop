import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {addToCart} from "../actions/cart";


const mapDispatchToProps = (dispatch) => {
  return {
    addToCart(item){
      dispatch(addToCart(item))
    }
  }
};

class AddToCartButton extends Component {
  render() {
    return (
      <button onClick={() => this.props.addToCart(this.props.product)}>Добавить в корзину</button>
    )
  }
}

export default connect(null, mapDispatchToProps)(AddToCartButton);
