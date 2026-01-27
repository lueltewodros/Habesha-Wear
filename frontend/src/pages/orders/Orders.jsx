import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchOrders } from "../../app";
import { Header } from "../../components/Header";
import "../../styles/orders.css";

export function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchOrders()
      .then((data) => {
        setOrders(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch orders:", err);
        setError("Failed to load orders. Please try again later.");
        setLoading(false);
      });
  }, []);

  if (error) {
    return (
      <div className="container orders-container">
        <div className="error-message">{error}</div>
      </div>
    );
  }

  return (
    <>
      <Header />
      {loading ? (
        <div className="container orders-container">
          <div className="loading-spinner">Loading orders...</div>
        </div>
      ) : (
        <div className="container orders-container">
          <h1 className="orders-title">My Orders</h1>

          {orders.length === 0 ? (
            <div className="no-orders">
              <p>You haven't placed any orders yet.</p>
              <Link
                to="/shop"
                className="continue-shopping-btn"
                style={{
                  display: "inline-block",
                  marginTop: "1rem",
                  color: "var(--color-primary)",
                  textDecoration: "underline",
                }}
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            <div className="orders-list">
              {orders.map((order) => (
                <div key={order._id} className="order-card">
                  <div className="order-header">
                    <div className="order-id">
                      <span className="label">Order ID:</span>
                      <span className="value">{order._id}</span>
                    </div>
                    <div className="order-date">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </div>
                    <div
                      className={`order-status status-${order.status ? order.status.toLowerCase() : "pending"}`}
                    >
                      {order.status || "Pending"}
                    </div>
                  </div>

                  <div className="order-items">
                    {order.items.map((item, index) => (
                      <div key={index} className="order-item">
                        <div
                          className="item-details"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "1rem",
                          }}
                        >
                          {item.productId?.images?.[0] && (
                            <img
                              src={item.productId.images[0]}
                              alt={item.productId.name}
                              style={{
                                width: "50px",
                                height: "50px",
                                objectFit: "cover",
                                borderRadius: "4px",
                              }}
                            />
                          )}
                          <div>
                            <span className="item-quantity">
                              {item.quantity}x
                            </span>
                            <span className="item-name">
                              {item.productId?.name ||
                                `Product ID: ${item.productId?._id || item.productId}`}
                            </span>
                          </div>
                        </div>
                        <div className="item-price">
                          {item.price.toLocaleString()} ETB
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="order-footer">
                    <div className="order-total">
                      <span className="label">Total:</span>
                      <span className="value">
                        {order.totalPrice.toLocaleString()} ETB
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
