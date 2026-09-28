import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { auth } from "../Firebase/firebaseConfig";
import useScrollToSection from "../../hooks/useScrollToSection";

const navLinks = [
  { id: "home", label: "Home", target: null },
  { id: "about-us", label: "About Us", target: "about-us" },
  { id: "menu", label: "Explore Menu", target: "explore-menu" },
  { id: "contact-us", label: "Contact Us", target: "contactus" },
];

const Navbar = ({ setShowLogin, isAuthenticated, name }) => {
  const [menu, setMenu] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const { getTotalCartAmount } = useContext(StoreContext);
  const scrollToSection = useScrollToSection();
  const navigate = useNavigate();

  const handleNavClick = (link) => {
    setMenu(link.id);
    setMenuOpen(false);
    scrollToSection(link.target);
  };

  const handleSignOut = () => {
    setMenuOpen(false);
    auth
      .signOut()
      .then(() => navigate("/"))
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  const handleCartClick = (e) => {
    setMenuOpen(false);
    if (!isAuthenticated) {
      e.preventDefault();
      setShowLogin(true);
    }
  };

  return (
    <nav className='navbar'>
      <Link to='/' onClick={() => handleNavClick(navLinks[0])}>
        <img src={assets.logo} className='logo' alt='FoodZing' />
      </Link>

      <ul className={`navbar-menu ${menuOpen ? "open" : ""}`}>
        {name && <li className='navbar-menu-welcome'>Welcome, {name}</li>}
        {navLinks.map((link) => (
          <li key={link.id}>
            <button
              type='button'
              onClick={() => handleNavClick(link)}
              className={menu === link.id ? "active" : ""}>
              {link.label}
            </button>
          </li>
        ))}
      </ul>

      <div className='navbar-right'>
        {name && <p className='navbar-welcome'>Welcome, {name}</p>}
        <Link
          to='/cart'
          onClick={handleCartClick}
          className='navbar-search-icon'
          aria-label='Cart'>
          <img src={assets.basket_icon} alt='' />
          {getTotalCartAmount() > 0 && <div className='dot'></div>}
        </Link>
        {isAuthenticated ? (
          <button className='navbar-auth-btn' onClick={handleSignOut}>
            Sign out
          </button>
        ) : (
          <button
            className='navbar-auth-btn'
            onClick={() => {
              setMenuOpen(false);
              setShowLogin(true);
            }}>
            Sign in
          </button>
        )}
        <button
          type='button'
          className={`navbar-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label='Toggle menu'
          aria-expanded={menuOpen}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
