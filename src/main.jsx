import React from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";
import { BrowserRouter } from "react-router-dom";
import FeaturesContextProvider from "./context/FeaturesContext";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <FeaturesContextProvider>
        <App />
      </FeaturesContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
