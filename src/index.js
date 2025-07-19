import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom"; // ✅ CHANGED
import StoreContextProvider from "./context/StoreContext.jsx";
import reportWebVitals from "./reportWebVitals";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    {" "}
    {/* ✅ CHANGED */}
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </HashRouter>
);
