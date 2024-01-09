import React, { useState, useEffect } from "react";

const ProductCard = () => {
  const [productData, setProductData] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

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

  const calculateTotalQuantity = (items) => {
    let totalQuantity = 0;
    items?.forEach((item) => {
      totalQuantity += item.quantity;
    });
    return totalQuantity;
  };

  const handleIncrement = () => {
    setSelectedQuantity(selectedQuantity + 1);
  };

  const handleDecrement = () => {
    if (selectedQuantity > 1) {
      setSelectedQuantity(selectedQuantity - 1);
    }
  };

  if (!productData) {
    return <div>Loading...</div>;
  }

  const { price, quantity, items, thumbnail } = productData;
  const totalQuantityOfProduct = calculateTotalQuantity(items);
  const totalPrice = price * selectedQuantity;
  const totalQuantitySelected = quantity * selectedQuantity;

  return (
    <div className="product-card">
      <div className="product-images">
        <img src={thumbnail} alt="Thumbnail" className="product-thumbnail" />
      </div>
      <div className="product-details">
        <h2>Product Details</h2>
        <p>Per Item Price: ${price}</p>
        <p>Per Item Quantity: {quantity}</p>
        <div>
          <button onClick={handleDecrement}>-</button>
          <input type="number" value={selectedQuantity} readOnly />
          <button onClick={handleIncrement}>+</button>
        </div>
        <p>Total Quantity of the Product: {totalQuantityOfProduct}</p>
        <p>Total Price: ${totalPrice}</p>
        <p>Total Quantity Selected: {totalQuantitySelected}</p>
      </div>
    </div>
  );
};

export default ProductCard;
