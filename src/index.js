import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom"; // HashRouter works on GitHub Pages without server rewrites
import StoreContextProvider from "./context/StoreContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </HashRouter>
);
