import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class CartContainer extends Component {
  render() {
    let { cart } = this.props;
    console.log(cart);
    return <></>;
  }
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
