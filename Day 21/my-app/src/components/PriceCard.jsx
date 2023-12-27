import React from "react";

const PriceCard = ({ price, plans, title }) => {
  const getMark = (value) => {
    return value ? "✔️" : "❌";
  };

  return (
    <div className="price-card">
      {/* <h4>${title}</h4> */}
      <h2>${price}/months</h2>
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
