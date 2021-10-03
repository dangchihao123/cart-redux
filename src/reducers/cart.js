import * as types from "../constants/ActionTypes";
const initialState = [
  {
    product: {
      id: 1,
      name: "Iphone 7Plus",
      image:
        "https://cdn.tgdd.vn/Products/Images/42/78124/iphone-7-plus-32gb-gold-600x600-600x600.jpg",
      price: 300,
      description: "sản phẩm do apple sản xuất",
      rating: 3,
    },
    quantity: 5,
  },
];

const cart = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      console.log(action);
      return [...state];
    default:
      return state;
  }
};

export default cart;
