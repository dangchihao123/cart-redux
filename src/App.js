import "./App.css";
import Header from "./components/Header";
import ProductContainer from "./containers/ProductContainer";
import Message from "./components/Message";
// import Cart from "./components/Cart";
import Footer from "./components/Footer";
import CartContainer from "./containers/CartContainer";

function App() {
  return (
    <div className="hidden-sn animated deep-purple-skin">
      <div>
        {/* Header */}
        <Header />
        <main id="mainContainer">
          <div className="container">
            {/* Products */}
            <ProductContainer />
            {/* Message */}
            <Message />
            {/* Cart */}
            <CartContainer />
          </div>
        </main>
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
