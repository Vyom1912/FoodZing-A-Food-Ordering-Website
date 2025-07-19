import React from "react";
import "./WhyFoodZing.css";
import { assets } from "../../assets/assets";
const WhyFoodZing = () => {
  return (
    <div className="WhyFoodZing">
      <div className="WhyFoodZing-title">
        <h1>
          Why <span>FoodZing?</span>
        </h1>
      </div>
      <div className="WhyFoodZing-del">
        <div className="WhyFoodZing-del1">
          <img src={assets.delivery1} alt="" />
          <h2>Easy To Order</h2>
        </div>
        <div className="WhyFoodZing-del2">
          <img src={assets.delivery2} alt="" />
          <h2>Fastest Delivery</h2>
        </div>
        <div className="WhyFoodZing-del3">
          <img src={assets.delivery3} alt="" />
          <h2>Best Quality</h2>
        </div>
      </div>
    </div>
  );
};

export default WhyFoodZing;
