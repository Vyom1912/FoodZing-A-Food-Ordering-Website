import { assets } from "../../assets/assets";
import useScrollToSection from "../../hooks/useScrollToSection";
import "./Header.css";
const Header = () => {
  const scrollToSection = useScrollToSection();

  return (
    <div className='header'>
      <div className='header-contents'>
        <h2>
          Savor the Flavor:
          <br />
          Bringing Delicious Dining Experiences to Your Doorstep.
        </h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise, one
          delicious meal at a time.
        </p>
        <button
          className='header-button'
          onClick={() => scrollToSection("explore-menu")}>
          View Menu
        </button>
      </div>
      <div className='header-img'>
        <img src={assets.heroImg} alt='Pizza' />
      </div>
    </div>
  );
};

export default Header;
