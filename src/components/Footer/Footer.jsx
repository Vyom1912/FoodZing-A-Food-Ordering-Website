import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import useScrollToSection from "../../hooks/useScrollToSection";

const Footer = () => {
  const scrollToSection = useScrollToSection();

  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
          <img className='footer-logo' src={assets.logo} alt='FoodZing' />
          <p>
            FoodZing brings your favourite dishes from our kitchen straight to
            your door. Fresh ingredients, talented chefs and fast delivery, one
            delicious meal at a time.
          </p>
          <div className='footer-social-icons'>
            <img src={assets.facebook_icon} alt='Facebook' />
            <img src={assets.twitter_icon} alt='Twitter' />
            <img src={assets.linkedin_icon} alt='LinkedIn' />
          </div>
        </div>
        <div className='footer-content-center'>
          <h2>FoodZing</h2>
          <ul>
            <li onClick={() => scrollToSection(null)}>Home</li>
            <li onClick={() => scrollToSection("about-us")}>About us</li>
            <li onClick={() => scrollToSection("explore-menu")}>Menu</li>
            <li onClick={() => scrollToSection("contactus")}>Contact us</li>
          </ul>
        </div>
        <div className='footer-content-right'>
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>
              <a href='tel:+919999999999'>+91 9999999999</a>
            </li>
            <li>
              <a href='mailto:contact@foodzing.com'>contact@foodzing.com</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>
        Copyright {new Date().getFullYear()} @ FoodZing.com - All Rights
        Reserved.
      </p>
    </div>
  );
};

export default Footer;
