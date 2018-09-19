import React, {Component} from 'react';
import CatalogCard from './CatalogCard';
import CartCounter from './CartCounter';
import {connect} from 'react-redux'
import {fetchProducts} from '../actions/catalog'


const mapStateToProps = (state) => {
  return {state};
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts(){
      dispatch(fetchProducts())
    }
  }
};

class Catalog extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return (
      <div>
        <h1>Catalog</h1>
        <CartCounter/>
        {
          this.props.state.catalog.entries.map((item) => (
            <CatalogCard key={`productCard-${item.sys.id}`} product={item}/>
          ))
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
