import React from "react";
import { CartProvider } from "./components/cartContext";
import ProductList from "./components/productList";

const App = () => {
  return (
    <CartProvider>
      <ProductList />
    </CartProvider>
  );
};

export default App;
