const initialState = [
  {
    id: 1,
    name: "Iphone 7Plus",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/78124/iphone-7-plus-32gb-gold-600x600-600x600.jpg",
    price: 300,
    description: "sản phẩm do apple sản xuất",
  },
  {
    id: 2,
    name: "Samsung galaxy s21",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/236128/samsung-galaxy-s21-plus-256gb-den-600x600-600x600.jpg",
    price: 800,
    description: "sản phẩm do samsung sản xuất",
  },
];

const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default products;
