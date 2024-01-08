import React, { useState, useEffect } from "react";
import "./styles.css";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const { state } = useCart();

  useEffect(() => {
    fetch("https://vishalvsk.github.io/json-deployed/product.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data); // Set the fetched data in state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="products-container">
      {/* Render products using the fetched data */}
      {state.products.map((product) => (
        <div className="product" key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          {/* Add buttons or other UI elements */}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
