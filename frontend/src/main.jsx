import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import ScrollToTop from "./utils/ScrollToTop.jsx";
import ScrollToHash from "./utils/ScrollToHash.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToHash />
      <App />
    </BrowserRouter>
  </StrictMode>
);
