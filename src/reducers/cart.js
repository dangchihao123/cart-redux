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
  {
    product: {
      id: 2,
      name: "Samsung galaxy s21",
      image:
        "https://cdn.tgdd.vn/Products/Images/42/236128/samsung-galaxy-s21-plus-256gb-den-600x600-600x600.jpg",
      price: 800,
      description: "sản phẩm do samsung sản xuất",
      rating: 4,
    },
    quantity: 3,
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
