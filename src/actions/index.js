import * as types from "../constants/ActionTypes";

export const actAddTocart = (product, quantity) => {
  return {
    type: types.ADD_TO_CART,
    product,
    quantity,
  };
};
