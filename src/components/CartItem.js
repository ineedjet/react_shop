import React, {Component} from 'react';

class CartItem extends Component {
  render() {
    const {title, price} = this.props.item;

    return (
      <p>{title}, цена: {price} рублей</p>
    )
  }
}

export default CartItem;
