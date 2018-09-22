import React, {Component} from 'react';
import Catalog from './Catalog';
import {connect} from 'react-redux'
import {fetchProducts} from '../actions/catalog'


const mapStateToProps = (state) => ({
   catalog: state.catalog.entries
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts(){
      dispatch(fetchProducts())
    }
  }
};

class CatalogContainer extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return (
      <Catalog products={this.props.catalog} />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatalogContainer);
