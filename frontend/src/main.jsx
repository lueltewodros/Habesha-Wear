import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import ScrollToTop from "./utils/ScrollToTop.jsx";
import ScrollToHash from "./utils/ScrollToHash.jsx";
import { CartProvider } from "./context/CartProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <ScrollToHash />
        <App />
      </BrowserRouter>
    </CartProvider>
  </StrictMode>,
);
