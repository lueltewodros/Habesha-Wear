import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/cartContent.css";
import { addToCart, fetchCart } from "../../app";

export function CartContent() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCart().then((data) => setCartItems(data.items || []));
  }, []);

  // This only updates local state for now
  const updateQuantity = async (productId, delta) => {
    try {
      const data = await addToCart(productId, delta);
      setCartItems(data.items || []);
    } catch (err) {
      console.error("Failed to update quantity:", err);
    }
  };

  const removeItem = (productId) => {
    setCartItems((items) =>
      items.filter(
        (item) => !(item.productId && item.productId._id === productId),
      ),
    );
  };

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
      <h1 className="cart-title">Your Shopping Cart</h1>

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

                <button
                  className="remove-btn"
                  onClick={() => removeItem(item.productId?._id)}
                >
                  Remove Item
                </button>
              </div>
              <div className="cart-item-total" style={{ fontWeight: 600 }}>
                {item.productId?.price &&
                  (item.productId.price * item.quantity).toLocaleString()}{" "}
                ETB
              </div>
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

          <button className="checkout-btn">Proceed to Checkout</button>

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
