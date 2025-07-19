import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import StoreContextProvider from "./context/StoreContext.jsx";
import reportWebVitals from "./reportWebVitals";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename='/sample'>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </BrowserRouter>
);
