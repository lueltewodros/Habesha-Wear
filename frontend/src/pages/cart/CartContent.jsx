import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/cartContent.css";

export function CartContent() {
  // Mock data for initial design presentation
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Hand-Woven Tila Kemis",
      category: "Women's Kemis",
      price: 12500,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1590033062317-6878b1b58980?auto=format&fit=crop&q=80&w=300",
    },
    {
      id: 2,
      name: "Traditional Men's Gabi",
      category: "Men's Traditional",
      price: 8500,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300",
    },
  ]);

  const updateQuantity = (id, delta) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item,
      ),
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
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
            <div key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-info">
                <div>
                  <span className="cart-item-category">{item.category}</span>
                  <h3>{item.name}</h3>
                  <div className="cart-item-price">
                    {item.price.toLocaleString()} ETB
                  </div>
                </div>

                <div className="quantity-controls">
                  <button
                    className="qty-btn"
                    onClick={() => updateQuantity(item.id, -1)}
                  >
                    -
                  </button>
                  <span className="qty-value">{item.quantity}</span>
                  <button
                    className="qty-btn"
                    onClick={() => updateQuantity(item.id, 1)}
                  >
                    +
                  </button>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeItem(item.id)}
                >
                  Remove Item
                </button>
              </div>
              <div className="cart-item-total" style={{ fontWeight: 600 }}>
                {(item.price * item.quantity).toLocaleString()} ETB
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
