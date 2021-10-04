import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Cart from "../components/Cart";
import * as message from "../constants/Message";
import CartItem from "../components/CartItem";
import CartResult from "../components/CartResult";
import { actDeleteProductCart } from "../actions/index";

class CartContainer extends Component {
  render() {
    let { cart } = this.props;
    // console.log(cart);
    return (
      <Cart>
        {this.showCart(cart)}
        {this.showTotalAmount(cart)}
      </Cart>
    );
  }

  showCart = (cart) => {
    let { onDeleteProductInCart } = this.props;
    let result = message.MSG_CART_EMPTY;
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return (
          <CartItem
            key={item.id}
            item={item}
            index={index}
            onDeleteProductInCart={onDeleteProductInCart}
          />
        );
      });
    }
    return result;
  };
  showTotalAmount = (cart) => {
    let result = null;
    if (cart.length > 0) {
      result = <CartResult cart={cart} />;
    }
    return result;
  };
}

CartContainer.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
      }).isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteProductInCart: (product) => {
      dispatch(actDeleteProductCart(product));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
