import { assets } from "../../assets/assets";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>
          Savor the Flavor:
          <br />
          Bringing Delicious Dining Experiences to Your Doorstep.
        </h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes
          crated with the finest ingredients and culinary expertise, one
          delicious meal at a time.
        </p>
        <a href="#explore-menu">
          <button className="header-button">View Menu</button>
        </a>
      </div>
      <div className="header-img">
        <img src={assets.heroImg} alt="" />
      </div>
    </div>
  );
};

export default Header;
