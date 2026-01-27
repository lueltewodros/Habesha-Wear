import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import "../../styles/cartContent.css";
import { useCart } from "../../context/CartContext.js";

export function CartContent() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

  // Helper wrappers are no longer needed if we use context methods directly in onClick,
  // but keeping them for consistent function signatures if preferred, or simplifying.
  // Context updateQuantity signature matches: (productId, delta)
  // Context removeFromCart signature matches: (productId)

  const subtotal = cartItems.reduce(
    (acc, item) =>
      acc +
      (item.productId && item.productId.price
        ? item.productId.price * item.quantity
        : 0),
    0,
  );
  const shipping = cartItems.length > 0 ? 500 : 0;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="container cart-container">
        <div className="empty-cart">
          <h2>Your Cart is Empty</h2>
          <p>It looks like you haven't added anything to your cart yet.</p>
          <Link to="/shop" className="continue-shopping">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container cart-container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <h1 className="cart-title" style={{ marginBottom: 0 }}>
          Your Shopping Cart
        </h1>
        {cartItems.length > 0 && (
          <button
            onClick={() => clearCart()}
            style={{
              backgroundColor: "transparent",
              color: "#dc3545",
              border: "1px solid #dc3545",
              padding: "0.5rem 1rem",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "0.9rem",
              transition: "all 0.2s",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#dc3545";
              e.target.style.color = "white";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "#dc3545";
            }}
          >
            Clear Cart
          </button>
        )}
      </div>

      <div className="cart-layout">
        <div className="cart-items-list">
          {cartItems.map((item) => (
            <div
              key={item.productId?._id || item.productId}
              className="cart-item"
            >
              <img
                src={item.productId?.images?.[0] || ""}
                alt={item.productId?.name || "Product"}
                className="cart-item-image"
              />
              <div className="cart-item-info">
                <div>
                  <span className="cart-item-category">
                    {item.productId?.category}
                  </span>
                  <h3>{item.productId?.name}</h3>
                  <div className="cart-item-price">
                    {item.productId?.price?.toLocaleString()} ETB
                  </div>
                </div>

                <div className="quantity-controls">
                  <button
                    className="qty-btn"
                    onClick={() => updateQuantity(item.productId?._id, -1)}
                  >
                    -
                  </button>
                  <span className="qty-value">{item.quantity}</span>
                  <button
                    className="qty-btn"
                    onClick={() => updateQuantity(item.productId?._id, 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="cart-item-total" style={{ fontWeight: 600 }}>
                {item.productId?.price &&
                  (item.productId.price * item.quantity).toLocaleString()}{" "}
                ETB
              </div>

              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.productId?._id)}
                aria-label="Remove item"
              >
                <FaTrash />
                <span className="remove-text">Remove</span>
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h3>Order Summary</h3>
          <div className="summary-details">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>{subtotal.toLocaleString()} ETB</span>
            </div>
            <div className="summary-row">
              <span>Estimated Shipping</span>
              <span>{shipping.toLocaleString()} ETB</span>
            </div>
            <div className="summary-row">
              <span>Tax</span>
              <span>Calculated at checkout</span>
            </div>
            <div className="summary-row total">
              <span>Estimated Total</span>
              <span>{total.toLocaleString()} ETB</span>
            </div>
          </div>

          <Link
            to="/checkout"
            className="checkout-btn"
            style={{
              display: "block",
              textAlign: "center",
              textDecoration: "none",
            }}
          >
            Proceed to Checkout
          </Link>

          <p
            style={{
              fontSize: "0.8rem",
              marginTop: "1rem",
              color: "var(--color-text-light)",
              textAlign: "center",
            }}
          >
            Secure payment powered by local gateways.
          </p>
        </div>
      </div>
    </div>
  );
}
