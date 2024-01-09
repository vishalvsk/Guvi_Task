import React from "react";
import CartPage from "./components/CartPage";
import "./App.css"; // Import your CSS file here

const App = () => {
  return (
    <div className="app-container">
      <h1>Shopping Cart</h1>
      <CartPage />
    </div>
  );
};

export default App;
