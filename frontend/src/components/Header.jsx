import { NavLink } from "react-router-dom";
import "../styles/header.css";

export function Header() {
  function returnActive(isActive) {
    return isActive ? "active" : "";
  }

  return (
    <nav className="navbar" id="navbar">
      <div className="nav-container">
        <NavLink to="/" className="logo">
          Habesha Wear
        </NavLink>
        <ul className="nav-links" id="navLinks">
          <li>
            <NavLink
              to="/shop"
              className={({ isActive }) => returnActive(isActive)}
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => returnActive(isActive)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) => returnActive(isActive)}
            >
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/orders"
              className={({ isActive }) => returnActive(isActive)}
            >
              Orders
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
