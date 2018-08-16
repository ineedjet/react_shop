import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {products} from './src/constants/Products';
import Catalog from "./src/components/Catalog";
import CartContext from './src/components/CartContext';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {cartList: []};

    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(item) {
    const newCartList = [...this.state.cartList, item];
    this.setState({cartList: newCartList})
  }

  render() {
    return (
      <CartContext.Provider value={{
        cartList: this.state.cartList,
        addToCart: this.addToCart
      }}>
        <div>
          <Router>
            <Switch>
              <Route exact strict path='/app' render={()=> <Catalog products={products}/> } />
            </Switch>
          </Router>
        </div>
      </CartContext.Provider>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
