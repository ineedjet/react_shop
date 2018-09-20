import React, {Component} from 'react';
import Cart from './Cart'
import {connect} from "react-redux";


const mapStateToProps = (state) => {
  return {state};
};

class CartContainer extends Component {
  render() {
    return (
      <Cart cartList = { this.props.state.cart.entries } />
    )
  }
}

export default connect(mapStateToProps)(CartContainer);
