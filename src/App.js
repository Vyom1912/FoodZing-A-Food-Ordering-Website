import { Routes, Route, useLocation } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
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
  const [user, setUser] = useState(null);
  const [username, setUserName] = useState("");
  const { pathname, state } = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setUserName(currentUser?.displayName || "");
    });
    return unsubscribe;
  }, []);

  // start each page at the top, unless we came here to scroll to a section
  useEffect(() => {
    if (!state?.scrollTo) {
      window.scrollTo(0, 0);
    }
  }, [pathname, state]);

  return (
    <>
      {showLogin && (
        <LoginPopup setShowLogin={setShowLogin} setUserName={setUserName} />
      )}
      <div className='app'>
        <Navbar
          setShowLogin={setShowLogin}
          isAuthenticated={Boolean(user)}
          name={username || user?.email || ""}
        />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/orderPlaced' element={<OrderPlaced />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
