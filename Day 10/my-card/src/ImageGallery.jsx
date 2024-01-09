import React, { useState, useEffect } from "react";

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://vishalvsk.github.io/json-deployed/product.json")
      .then((response) => response.json())
      .then((data) => {
        setImages(data.images);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="card-container">
      {images?.map((image, index) => (
        <div className="card" key={index}>
          <img src={image.url} alt={image.alt} />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
