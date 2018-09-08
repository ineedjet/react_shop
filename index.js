import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CartContext from './src/components/CartContext';
import Layout from './src/components/Layout';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import {routes} from './src/routes/routes'

import RouteWithSubRoutes from './src/routes/RouteWithSubRoutes';

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
        <Router>
          <Layout>
            <Switch>
              { routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />) }
            </Switch>
          </Layout>
        </Router>
      </CartContext.Provider>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
