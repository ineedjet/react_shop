import React, {Component} from 'react';
import Cart from './Cart'
import {connect} from "react-redux";


const mapStateToProps = (state) => ({
  cart: state.cart.entries
});

class CartContainer extends Component {
  render() {
    return (
      <Cart cartList = { this.props.cart } />
    )
  }
}

export default connect(mapStateToProps)(CartContainer);
