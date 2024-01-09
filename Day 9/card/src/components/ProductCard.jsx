import React, { useEffect, useState } from "react";

const ProductCard = () => {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://vishalvsk.github.io/json-deployed/product.json"
        );
        const data = await response.json();
        setProductData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  if (!productData) {
    return <div>Loading...</div>;
  }

  const { price, quantity, items } = productData;
  const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);
  const totalAmount = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="product-card">
      <h2>Product Details</h2>
      <p>Per Item Price: {price}</p>
      <p>Per Item Quantity: {quantity}</p>
      <p>Total Quantity: {totalQuantity}</p>
      <p>Total Amount: {totalAmount}</p>
    </div>
  );
};

export default ProductCard;
