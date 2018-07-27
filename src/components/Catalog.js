import React, {Component} from 'react';
import ProductCard from './ProductCard';
import Cart from './Cart';

class Catalog extends Component {
  constructor(props){
    super(props);
  }
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

Catalog.defaultProps = {
  cartItems: [1,2,3]
}

export default Catalog;
