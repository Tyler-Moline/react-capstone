import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./components/pages/Home";
import ContactUs from "./components/pages/Contact";
import AboutUs from "./components/pages/About";
import Cart from "./components/pages/Cart";
import Products from "./components/pages/Products";
import Navbar from "./components/navigation/NavBar";
import Footer from "./components/navigation/Footer";
import Product from "./components/pages/Product";
import "./styles/App.scss";

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error(error));

    return () => controller.abort();
  }, []);

  const addToCart = (productId) => {
    const item = cart.find((product) => product.id === productId);

    if (item) {
      updateItemFromCart(productId, item.qty + 1);
      return;
    }

    setCart((prevCart) => [
      ...prevCart,
      {
        id: productId,
        qty: 1,
        price: products.find((product) => product.id === productId).price,
      },
    ]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      return prevCart.filter((item) => item.id !== productId);
    });
  };

  const updateItemFromCart = (productId, qty) => {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.id === productId) {
          return {
            ...item,
            qty: qty,
          };
        } else {
          return item;
        }
      });
    });
  };

  const getCartProducts = () => {
    return products.filter((product) => {
      return cart.find((item) => item.id === product.id);
    });
  };

  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/about-us" component={AboutUs} />
          <Route
            path="/products/:slug"
            render={(routeProps) => (
              <Product
                allProducts={products}
                addToCart={addToCart}
                {...routeProps}
              />
            )}
          />
          <Route
            path="/products"
            render={() => (
              <Products
                allProducts={products}
                addToCart={addToCart}
                setCart={setCart}
              />
            )}
          />

          <Route
            path="/cart"
            render={() => (
              <Cart
                cart={cart}
                products={getCartProducts()}
                updateItemFromCart={updateItemFromCart}
                removeFromCart={removeFromCart}
              />
            )}
          />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
