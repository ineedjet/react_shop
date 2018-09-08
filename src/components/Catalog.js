import React, {Component} from 'react';
import ProductCard from './ProductCard';
import CartCounter from './CartCounter';

class Catalog extends Component {
  render() {
    return (
      <div>
        <h1>Catalog</h1>
        <CartCounter/>
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
