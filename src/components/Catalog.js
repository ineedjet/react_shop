import React, {Component} from 'react';
import ProductCard from './ProductCard';
import CartCounter from './CartCounter';
import {apiUrl, accessToken, spaces, environments} from '../constants/access';
import request from 'superagent';

class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  componentDidMount() {
    request
      .get(`${apiUrl}/spaces/${spaces}/environments/${environments}/entries`)
      .query({ 'content_type': 'product'})
      .set('Authorization', `Bearer ${accessToken}`)
      .then(({ body: { items } }) => {
        this.setState({ items })
      });
  }

  render() {
    return (
      <div>
        <h1>Catalog</h1>
        <CartCounter/>
        {
          this.state.items.map((item) => (
            <ProductCard key={`productCard-${item.sys.id}`} product={item} />
          ))
        }
      </div>
    )
  }
}

export default Catalog;
