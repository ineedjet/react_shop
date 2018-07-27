import React, {Component} from 'react';
import ProductCard from './ProductCard';
import Cart from './Cart';

class Catalog extends Component {
  render() {
    return (
        <div>
          <Cart/>
          {
            this.props.products.map(product => (
                <ProductCard key={`productCard-${product.id}`} product={product}/>
            ))
          }
        </div>
    )
  }
}

export default Catalog;
