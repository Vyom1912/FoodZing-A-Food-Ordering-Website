import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import WhyFoodZing from "../../components/WhyFoodZing/WhyFoodZing";
import About from "../../components/About/About";
import ContactUs from "../../components/ContactUs/ContactUs";
const Home = () => {
  const [category, setCategory] = useState("All");
  const { state } = useLocation();

  // scroll to a section when navigated here from another page (see useScrollToSection)
  useEffect(() => {
    if (state?.scrollTo) {
      document
        .getElementById(state.scrollTo)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, [state]);

  return (
    <div>
      <Header />
      <WhyFoodZing />
      <About />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <ContactUs />
    </div>
  );
};

export default Home;
