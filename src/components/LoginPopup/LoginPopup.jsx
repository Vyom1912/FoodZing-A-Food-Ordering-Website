import React, { useEffect, useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import { auth } from "../Firebase/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const errorMessages = {
  "auth/email-already-in-use": "An account with this email already exists.",
  "auth/invalid-email": "Please enter a valid email address.",
  "auth/weak-password": "Password should be at least 6 characters.",
  "auth/invalid-credential": "Incorrect email or password.",
  "auth/user-not-found": "Incorrect email or password.",
  "auth/wrong-password": "Incorrect email or password.",
  "auth/too-many-requests": "Too many attempts. Please try again later.",
};

const LoginPopup = ({ setShowLogin, setUserName }) => {
  const [currState, setCurrState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // close with the Escape key and stop the page scrolling behind the popup
  useEffect(() => {
    const onKeyDown = (e) => e.key === "Escape" && setShowLogin(false);
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [setShowLogin]);

  const switchState = (state) => {
    setCurrState(state);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      if (currState === "Sign Up") {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(res.user, { displayName: name });
        setUserName(name);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      setShowLogin(false);
    } catch (err) {
      setError(errorMessages[err.code] || err.message);
      setLoading(false);
    }
  };

  return (
    <div
      className='login-popup'
      onClick={(e) => e.target === e.currentTarget && setShowLogin(false)}>
      <form className='login-popup-container' onSubmit={handleSubmit}>
        <div className='login-popup-title'>
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt='Close'
          />
        </div>
        <div className='login-popup-inputs'>
          {currState === "Sign Up" && (
            <input
              type='text'
              placeholder='Your Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Your Email'
            required
          />
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            minLength={6}
            required
          />
        </div>
        {error && <p className='login-popup-error'>{error}</p>}
        <button type='submit' disabled={loading}>
          {loading
            ? "Please wait..."
            : currState === "Sign Up"
            ? "Create account"
            : "Login"}
        </button>
        <div className='login-popup-condition'>
          <input type='checkbox' id='login-terms' required />
          <label htmlFor='login-terms'>
            By continuing, I agree to the terms of use & Privacy policy.
          </label>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => switchState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => switchState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
