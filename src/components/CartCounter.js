import React, {Component} from 'react';
import {cartPath} from "../helpers/routes";
import Link from "./Link";
import connect from "react-redux/es/connect/connect";

const mapStateToProps = (state) => ({
  cart: state.cart
});

class CartCounter extends Component {
  render() {

    return (
      <p>
        <Link to={cartPath()}>В корзине: {this.props.cart.entries.length}</Link>
      </p>
    )
  }
}

export default connect(mapStateToProps)(CartCounter);
