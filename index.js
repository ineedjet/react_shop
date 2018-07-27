import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {products} from './src/constants/Products';
import Catalog from "./src/components/Catalog";
import CartContext from './src/components/CartContext'

const cartList = [];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {cartList: []};
  }


  render() {
    return (
        <CartContext.Provider value={cartList}>
          <div>
            <Catalog products={products}/>
          </div>
        </CartContext.Provider>
    )
  }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
