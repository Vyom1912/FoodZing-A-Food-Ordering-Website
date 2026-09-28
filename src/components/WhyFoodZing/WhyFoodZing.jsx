import React from "react";
import "./WhyFoodZing.css";
import { assets } from "../../assets/assets";

const features = [
  { title: "Easy To Order", image: assets.delivery1 },
  { title: "Fastest Delivery", image: assets.delivery2 },
  { title: "Best Quality", image: assets.delivery3 },
];

const WhyFoodZing = () => {
  return (
    <div className='WhyFoodZing'>
      <h1 className='WhyFoodZing-title'>
        Why <span>FoodZing?</span>
      </h1>
      <div className='WhyFoodZing-cards'>
        {features.map((feature) => (
          <div className='WhyFoodZing-card' key={feature.title}>
            <img src={feature.image} alt='' />
            <h2>{feature.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyFoodZing;
