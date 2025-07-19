import React, { useState, useEffect } from "react";
import "./OrderPlaced.css";

const PlaceOrdered = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`place-ordered ${showAnimation ? "show" : ""}`}>
      <div className='content'>
        <h2>Your Order Placed ✅</h2>
        <p>
          You ordered from: <span>FoodZing</span>
        </p>
      </div>
    </div>
  );
};

export default PlaceOrdered;
