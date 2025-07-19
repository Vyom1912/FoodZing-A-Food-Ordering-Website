import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import { useEffect, useState } from "react";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import { auth } from "./components/Firebase/firebaseConfig";
import OrderPlaced from "./pages/OrderPlaced/OrderPlaced";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName("");
      }
    });
  }, []);

  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} name={username} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/orderPlaced' element={<OrderPlaced />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
