import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
const injectGA = () => {
    if (typeof window == 'undefined') {
        return;
    }
    window.dataLayer = window.dataLayer || [];
    function gtag() {
        window.dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'G-TCGNCNH9ZC');
};
root.render(
  <React.StrictMode>
      <script>{injectGA()}</script>

      <App />
  </React.StrictMode>
);
