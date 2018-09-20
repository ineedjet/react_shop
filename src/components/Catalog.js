import React, {Component} from 'react';
import CatalogCard from './CatalogCard';
import CartCounter from './CartCounter';


class Catalog extends Component {
  render() {
    return (
      <div>
        <h1>Catalog</h1>
        <CartCounter/>
        {
          this.props.products.map((product) => (
            <CatalogCard key={`productCard-${product.sys.id}`} product={product}/>
          ))
        }
      </div>
    )
  }
}

export default Catalog;
