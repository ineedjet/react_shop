import React, {Component} from 'react';
import Cart from './Cart'
import {connect} from "react-redux";


const mapStateToProps = (state) => ({
  cart: state.cart
});

class CartContainer extends Component {
  render() {
    return (
      <Cart cartList = { this.props.cart.entries } />
    )
  }
}

export default connect(mapStateToProps)(CartContainer);
