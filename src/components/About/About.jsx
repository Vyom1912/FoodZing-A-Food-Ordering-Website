import React from "react";
import "./About.css";
import { assets } from "../../assets/assets";
const About = () => {
  return (
    <div className="about-us" id="about-us">
      <div className="about-left">
        <img className="about-left-img" src={assets.aboutimg} alt="" />
      </div>
      <div className="about-right">
        <p className="title">Overview</p>
        <h1 className="about-us-title">A little information about us</h1>
        <p className="about-us-desc">
          At “FOODZING”, we're passionate about bringing our delicious cuisine
          directly to your doorstep. In addition to our welcoming dining
          atmosphere, we also offer convenient delivery services, ensuring that
          you can enjoy our flavorful creations wherever you are.
        </p>
        <h2 className="about-h2">25+</h2>
        <p className="extra">Dishes</p>
      </div>
    </div>
  );
};

export default About;
