import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {products} from './src/constants/Products';
import Catalog from './src/components/Catalog';
import CartContext from './src/components/CartContext';
import Layout from './src/components/Layout';
import Contacts from './src/components/Contacts';
import Product from './src/components/Product';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { mainPath, cartPath, contactsPath, productPath } from './src/helpers/routes';

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
              <Route exact strict path={mainPath()} render={ () => <Catalog products={products}/> } />
              <Route exact strict
                     path={productPath()}
                     render={ ({ match: { params }}) => <Product id={params.id} />}
              />
              <Route exact strict path={cartPath()} render={ () => <div><h1>Cart</h1></div> } />
              <Route exact strict path={contactsPath()} render={ () => <Contacts/> } />
              <Route exact strict path='' render={ () => <h1>404</h1> } />
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
