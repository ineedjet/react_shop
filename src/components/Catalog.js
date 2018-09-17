import React, {Component} from 'react';
import ProductCard from './ProductCard';
import CartCounter from './CartCounter';

import request from 'superagent';

const acessToken = '9608754a447d852210eb39d271a210f6a2901d3f8f3f52cebea8e814df94c839';

class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  componentDidMount() {
    request
      .get('https://cdn.contentful.com/spaces/hxpnkpcjx8zo/environments/master/entries')
      .query({ 'content_type': 'product'})
      .set('Authorization', `Bearer ${acessToken}`)
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
