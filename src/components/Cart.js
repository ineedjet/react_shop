import React, {Component} from 'react';
import CartItem from './CartItem'
import connect from "react-redux/es/connect/connect";


const mapStateToProps = (state) => {
  return {state};
};

class Cart extends Component {
  render() {
    const cartList = this.props.state.cart.entries;

    return (
      <div>
        <h1>Cart</h1>
        { cartList.map( (item, index) => (<CartItem key={`itemCard-${index}`} item={item} />) ) }
        <div>В корзине {cartList.length} товаров</div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Cart);
