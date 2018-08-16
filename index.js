import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {products} from './src/constants/Products';
import Catalog from "./src/components/Catalog";
import CartContext from './src/components/CartContext';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { mainPath, cartPath, contactsPath, productPath } from './src/helpers/routes';

const Product = ({ match: { params } }) => {
  return (<div>Product id is id { params.id }</div>)
};

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
              <Route exact strict path={mainPath()} render={ () => <Catalog products={products}/> } />
              <Route exact strict
                     path={productPath()}
                     component={Product}
              />
              <Route exact strict path={cartPath()} render={ () => <div>Cart</div> } />
              <Route exact strict path={contactsPath()} render={ () => <div>Contacts</div> } />
              <Route exact strict path='' render={ () => <div>404</div> } />
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
