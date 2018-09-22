import Cart from './Cart'
import {connect} from "react-redux";


const mapStateToProps = (state) => ({
  cartList: state.cart.entries
});

export default connect(mapStateToProps)(Cart);
