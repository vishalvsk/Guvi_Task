import React from "react";

const PriceCard = ({ price, plans, title }) => {
  const getMark = (value) => {
    const markStyle = {
      color: value ? "#000" : "#666", // Adjust colors here
    };
    return value ? (
      <span style={markStyle}>✔️</span>
    ) : (
      <span style={markStyle}>❌</span>
    );
  };

  return (
    <div className="price-card">
      <p>{title}</p>
      <h2>${price}/months</h2> <hr />
      <div className="plans">
        {plans.map((plan, index) => (
          <h5 key={index}>
            {getMark(plan.available)} {plan.name}
          </h5>
        ))}
      </div>
      <button className="subscribe-btn">Button</button>
    </div>
  );
};

export default PriceCard;
