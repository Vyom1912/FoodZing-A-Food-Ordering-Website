import React, { useContext, useState, useEffect } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { auth } from "../Firebase/firebaseConfig";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [username, setUserName] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
        setIsAuthenticated(true);
      } else {
        setUserName("");
        setIsAuthenticated(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const { getTotalCartAmount } = useContext(StoreContext);

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {})
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  const handleCartClick = () => {
    if (!isAuthenticated) {
      setShowLogin(true);
    }
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} className="logo" alt="" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#about-us"
          onClick={() => setMenu("about-us")}
          className={menu === "about-us" ? "active" : ""}
        >
          About Us
        </a>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Explore Menu
        </a>

        <a
          href="#contactus"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>
      <div className="navbar-right">
        <h2>{username ? ` Welcome ${username}` : ""}</h2>
        <div className="navbar-search-icon">
          {isAuthenticated && (
            <Link to={"/cart"} onClick={handleCartClick}>
              <img src={assets.basket_icon} alt="" />
            </Link>
          )}

          {isAuthenticated && (
            <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
          )}
        </div>
        {username ? (
          <button onClick={handleSignOut}>Sign out</button>
        ) : (
          <button onClick={() => setShowLogin(true)}>Sign in</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
