import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import { useState } from "react";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import WhyFoodZing from "../../components/WhyFoodZing/WhyFoodZing";
import About from "../../components/About/About";
import ContactUs from "../../components/ContactUs/ContactUs";
const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      {<Header />}
      <WhyFoodZing />
      <About />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <ContactUs />
    </div>
  );
};

export default Home;
