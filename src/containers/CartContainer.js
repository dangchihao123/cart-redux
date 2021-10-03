import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Cart from "../components/Cart";
import * as message from "../constants/message";
import CartItem from "../components/CartItem";

class CartContainer extends Component {
  render() {
    let { cart } = this.props;
    console.log(cart);
    return <Cart>{this.showCart(cart)}</Cart>;
  }

  showCart = (cart) => {
    let result = message.MSG_CART_EMPTY;
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return <CartItem key={item.id} item={item} index={index} />;
      });
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

export default connect(mapStateToProps, null)(CartContainer);
