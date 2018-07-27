import React, {Component} from 'react';
import ProductCard from './ProductCard';

class Catalog extends Component {
    render() {

        return (
            <div>
                {
                    this.props.products.map(product => (
                        <ProductCard key={`productCard-${product.id}`} product={product} />
                    ))
                }
            </div>
        )
    }
}

export default Catalog;
