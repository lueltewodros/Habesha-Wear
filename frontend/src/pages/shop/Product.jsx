import { FaShoppingCart, FaCheck } from "react-icons/fa";
import { useCart } from "../../context/CartContext.js";
import { useState } from "react";

export function Product({ product }) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = async () => {
    await addToCart(product._id, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img
          src={product.images[0]}
          alt={product.name}
          className="product-image"
        />
        <button
          className={`add-to-cart-btn ${isAdded ? "success" : ""}`}
          aria-label={isAdded ? "Added to cart" : "Add to cart"}
          onClick={handleAddToCart}
          disabled={isAdded}
        >
          {isAdded ? <FaCheck /> : <FaShoppingCart />}
        </button>
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{product.price.toLocaleString()} ETB</p>
      </div>
    </div>
  );
}
