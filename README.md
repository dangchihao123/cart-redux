# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


--------------------------------------------------------
bài 1: 
- create project cart redux 
+ npx create-react-app cart-redux
- import template and library
- phân chia components:
-app
--header

--Products
---product
---product
---product
--message
--cart
---cartItem
---cartResult

--footer
---------------------------------
bài 2:
- cài đặt redux react-redux
* tạo thư mục
** reducer
***index.js
***products.js
** action
** constants
***ActionTypes.js
** container
-----------------------------------
bài 3: Hiển thị sản phẩm từ state trong store ra components
* tạo kết nối component products.js đến store
* trong products.js tạo 1 hàm hiển thị dữ liệu, tham số truyền vào hàm là 1 props chứa 1 mãng các object product từ store truyền vào
* trong product.js ta sẽ tạo 1 hàm để hiển thị số sao cho sản phẩm

-----------------------------------
bài 4: container
* container được sử dụng như 1 component trung gian giữa redux và component
* container sẽ thực hiện việc kết nối đến store để lấy dữ liệu
* container sẽ thực hiện việc truyền dữ liệu về cho component

-----------------------------------
bài 5: checkType kiểm tra dữ liệu khi lấy từ store
sử dụng checkType của reactjs
link tham khỏa: https://reactjs.org/docs/typechecking-with-proptypes.html

-----------------------------------
bài 6: Thêm sản phẩm vào giỏ hàng
* constants > ActionTypes.js
- export const ADD_TO_CART = 'ADD_TO_CART'
* actions > index.js
- import * as types from 'constants/ActionTypes'
- export const actAddToCart = (product, quantity)=>{
    return {
        type: types.ADD_TO_CART,
        product, 
        quantity
    }
}
* reducer > cart.js (nhớ import vào reducer > index.js)
- import ActionTypes...
- const initialState = [
    {
        product:{
            id:1,
            name:...,
            price...,
            ...,
            ...
        },
        quantity:5
    }
]

const cart =(state=initialState, action) =>{
    switch(action.typre){
        case types.ADD_TO_CART:
        console.log(action)
        return [... state]
        default: return state
    }
}
export default cart;

* container > CartContainer.js (được sử dụng thay cho component <Cart /> trong App.js)
- kết nối đến store
- lấy state trong store chuyển thành props trong component này
- checkType props khi lấy từ store
- tạo hàm showCart() truyền dữ liệu vào CartItem 
- chuyền dữ liệu bằng children từ CartContainer -> Cart -> CartItem

-----------------------------------
bài 7: Thêm sản phẩm vào giỏ hàng (tt)
* ý tưởng: Bắt sự kiện khi nhấn vào nút button thì sản phẩm sẽ được lưu vào store và localStorage, nếu sản phẩm trong giỏ hàng đã tồn tại rồi thì cập nhật số lượng, nếu chưa có sản phẩm thì thêm sản phẩm vào giỏ hàng
* các bước làm:
- bắt sự kiện nút button truyền vào hàm onAddToCart(product) truyền vào tham số product là sản phẩm mà ta muốn mua
- Tại productContainer.js ta dispatch 1 action chuyển thành props của container và chuyền vào component Card 1 props
- tại product.js ta nhận props từ productContainer.js chuyền vào hàm onAddToCart
- tại reducer > cart.js ta xử lý case ADD_TO_CART: để thêm sản phẩm vào trong store
-- kiểm tra nếu như sản phẩm đã có trong giỏ hàng rồi thì cập nhật lại số lượng (các sản phẩm được phân biệt với nhau qua  id)
-- viết hàm tìm index của sản phẩm
-- index !== -1 update quantity tại vị trí index trong mảng , ngược lại thêm sản phẩm vào giỏ hàng
 
let data = JSON.parse(localStorage.getItem('CART'))
let initialState = data ? data : []


let findIndex  = (cart, product) =>{
    let index = -1;
    if(cart.length > 0){
        for(let i = 0; i < cart.length; i++){
            if(cart[i].product.id === product.id){
                index = i;
                break;
            }
        }
    }
    return index;
}

case types.ADD_TO_CART:

let {quantity, product} = action
let index = findIndex(state, product);
console.log(index) // kiểm tra xem có đúng vị trí hay không
if(index !== -1){
    state[index].quantity += quantity;
}else{
    state.push({
        product,
        quantity
    })
}
localStorage.setItem("CART", JSON.stringify(state));
return [...state]