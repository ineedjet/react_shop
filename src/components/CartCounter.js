import React, {Component} from 'react';
import {cartPath} from "../helpers/routes";
import Link from "./Link";
import connect from "react-redux/es/connect/connect";

const mapStateToProps = (state) => {
  return {state};
};

class CartCounter extends Component {
  render() {
    const CartList = this.props.state.cart.entries;

    return (
      <p>
        <Link to={cartPath()}>В корзине: {CartList.length}</Link>
      </p>
    )
  }
}

export default connect(mapStateToProps)(CartCounter);
