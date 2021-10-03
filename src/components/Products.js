import React, { Component } from "react";
import Product from "./Product";
import { connect } from "react-redux";

class Products extends Component {
  render() {
    let { product } = this.props;
    return (
      <section className="section">
        <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
        <div className="row">
          {/*
           *    gọi là hiển thị sản phẩm và đối số truyền vào là state trong store chuyển về component là 1 cái props
           */}
          {this.showProduct(product)}
        </div>
      </section>
    );
  }

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

const mapStateToProps = (state) => {
  return {
    product: state.products,
  };
};

export default connect(mapStateToProps, null)(Products);
