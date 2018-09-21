import React, {Component} from 'react';
import Cart from './Cart'
import {connect} from "react-redux";
import { clearCart } from '../actions/cart';

const mapStateToProps = (state) => ({
  cart: state.cart.entries
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
      <Cart cartList = { this.props.cart } clearCart = { this.props.clearCart } />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
