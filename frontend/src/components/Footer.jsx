import { Link } from "react-router-dom";
import "../styles/footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Habesha Wear</h4>
            <p>
              Celebrating Ethiopian fashion heritage through traditional
              craftsmanship.
            </p>
          </div>

          <div className="footer-section">
            <h4>Shop</h4>
            <ul className="footer-links">
              <li>
                <Link to="/shop#women">Women's Kemis</Link>
              </li>
              <li>
                <Link to="/shop#men">Men's Traditional</Link>
              </li>
              <li>
                <Link to="/shop#shoes">Shoes</Link>
              </li>
              <li>
                <Link to="/shop#bags">Bags</Link>
              </li>
              <li>
                <Link to="/shop#jewellery">Jewellery</Link>
              </li>
              <li>
                <Link to="/shop#kids-cloth">Kids Cloth</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Company</h4>
            <ul className="footer-links">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/#contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Follow Us</h4>
            <p style={{ fontSize: "0.9rem" }}>
              <span>Instagram</span> | <span>Facebook</span> |
              <span>TikTok</span>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Habesha Wear. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
