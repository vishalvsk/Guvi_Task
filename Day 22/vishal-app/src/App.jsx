// App.js
import React, { useState } from "react";
import Header from "./componets/Header";
import ProductList from "./componets/ProductList";
import Cart from "./componets/Cart";
import "./App.css";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const products = [
    { id: 1, name: "Product 1", description: "Description of Product 1" },
    { id: 2, name: "Product 2", description: "Description of Product 2" },
    // Add more products as needed
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productToRemove) => {
    const updatedCart = cartItems.filter(
      (product) => product !== productToRemove
    );
    setCartItems(updatedCart);
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <ProductList products={products} addToCart={addToCart} />
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
};

export default App;
