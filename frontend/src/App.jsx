import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import "./styles/App.css";
import { Shop } from "./pages/shop/Shop";
import { Cart } from "./pages/cart/Cart";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="shop" element={<Shop />} />
      <Route path="cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
