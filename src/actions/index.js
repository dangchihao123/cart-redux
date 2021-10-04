import * as types from "../constants/ActionTypes";

export const actAddTocart = (product, quantity) => {
  return {
    type: types.ADD_TO_CART,
    product,
    quantity,
  };
};
export const actMessage = (message) => {
  return { type: types.MESSAGE, message };
};
export const actDeleteProductCart = (product) => {
  return { type: types.DELETE_PRODUCT_IN_CART, product };
};
