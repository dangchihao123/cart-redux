import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "../components/Product";
import Products from "../components/Products";
import PropTypes from "prop-types";

class ProductContainer extends Component {
  render() {
    let { product } = this.props;
    return <Products>{this.showProduct(product)}</Products>;
  }

  // Hàm hiển thị sản phẩm nhận vào tham số là 1 mảng các object sản phẩm
  // Hàm hiển thị sản phẩm nhận vào tham số là 1 mảng các object sản phẩm
  showProduct = (products) => {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <Product index={index} product={product} key={product.id} />;
      });
    }
    return result;
  };
}

ProductContainer.propTypes = {
  product: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

const mapStateToProps = (state) => {
  return {
    product: state.products,
  };
};

export default connect(mapStateToProps, null)(ProductContainer);
