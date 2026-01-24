import { FaShoppingCart } from "react-icons/fa";

export function Product({ product }) {
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img
          src={product.images[0]}
          alt={product.name}
          className="product-image"
        />
        <button className="add-to-cart-btn" aria-label="Add to cart">
          <FaShoppingCart />
        </button>
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{product.price.toLocaleString()} ETB</p>
      </div>
    </div>
  );
}
