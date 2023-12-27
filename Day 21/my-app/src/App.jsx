import React from "react";
import PriceCard from "./components/PriceCard";
import "./App.css";

const App = () => {
  <h1>free</h1>
  const priceRanges = [
    {
      title: { name: "free" },
      price: 0,
      plans: [
        { name: "single user", available: true },
        { name: "50 GB storage", available: true },
        { name: "unlimited public projects", available: true },
        { name: "community access", available: true },
        { name: "unlimited private projects", available: false },
        { name: "Dedicated phone support", available: false },
        { name: "free subdomain", available: false },
        { name: "monthly status reports", available: false },
      ],
    },
    {
      title: { name: "plus" },
      price: 9,
      plans: [
        { name: "single user", available: true },
        { name: "50 GB storage", available: true },
        { name: "unlimited public projects", available: true },
        { name: "community access", available: true },
        { name: "unlimited private projects", available: true },
        { name: "Dedicated phone support", available: true },
        { name: "free subdomain", available: true },
        { name: "monthly status reports", available: false },
      ],
    },
    {
      title: { name: "pro" },
      price: 49,
      plans: [
        { name: "single user", available: true },
        { name: "50 GB storage", available: true },
        { name: "unlimited public projects", available: true },
        { name: "community access", available: true },
        { name: "unlimited private projects", available: true },
        { name: "Dedicated phone support", available: true },
        { name: "free subdomain", available: true },
        { name: "monthly status reports", available: true },
      ],
    },
  ];

  return (
    <div className="price-cards">
      {priceRanges.map((range, index) => (
        <PriceCard key={index} price={range.price} plans={range.plans} />
      ))}
    </div>
  );
};

export default App;


