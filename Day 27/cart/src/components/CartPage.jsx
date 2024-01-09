import React, { useState, useEffect } from "react";

const CartPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://vishalvsk.github.io/json-deployed/product.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="cart-container">
      {/* Display products with their price and quantity */}
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <p>Quantity: {product.quantity}</p>
          {/* Add to cart button or functionality */}
        </div>
      ))}
      {/* Display total quantity and total amount */}
      <div className="total-section">
        <h3>Total Quantity: {/* Calculate total quantity */}</h3>
        <h3>Total Amount: ${/* Calculate total amount */}</h3>
      </div>
    </div>
  );
};

export default CartPage;
