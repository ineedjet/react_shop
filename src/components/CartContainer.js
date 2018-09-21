import React, {Component} from 'react';
import Cart from './Cart'
import {connect} from "react-redux";
import { clearCart } from '../actions/cart';

const mapStateToProps = (state) => ({
  cart: state.cart
});

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart(){
      dispatch(clearCart());
    }
  }
};

class CartContainer extends Component {
  render() {
    return (
      <Cart cartList = { this.props.cart.entries } clearCart = { this.props.clearCart } />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
