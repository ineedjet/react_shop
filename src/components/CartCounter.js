import React, {Component} from 'react';
import {cartPath} from "../helpers/routes";
import Link from "./Link";
import connect from "react-redux/es/connect/connect";

const mapStateToProps = (state) => ({
  cartCounter: state.cart.entries.length
});

class CartCounter extends Component {
  render() {

    return (
      <p>
        <Link to={cartPath()}>В корзине: {this.props.cartCounter}</Link>
      </p>
    )
  }
}

export default connect(mapStateToProps)(CartCounter);
