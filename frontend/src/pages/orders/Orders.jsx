import { useState, useEffect } from "react";
import { fetchOrders } from "../../app";
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

  if (loading) {
    return (
      <div className="container orders-container">
        <div className="loading-spinner">Loading orders...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container orders-container">
        <div className="error-message">{error}</div>
      </div>
    );
  }

  return (
    <div className="container orders-container">
      <h1 className="orders-title">My Orders</h1>

      {orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders yet.</p>
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
                    {/* Assuming populated, but currently not populated in backend getOrders. 
                         If not populated, we might show ID or name if stored. 
                         Let's assume name isn't stored in item unless we populated or stored snapshot.
                         Wait, Order schema doesn't store Product snapshots beyond price/qty.
                         Without populate, we can't show names. 
                         Let's update backend to populate first, or handle it gracefully.
                         For now displaying basic info.
                     */}
                    <div className="item-details">
                      <span className="item-quantity">{item.quantity}x</span>
                      {/* Placeholder for product name if not available */}
                      <span className="item-name">
                        Product ID: {item.productId}
                      </span>
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
  );
}
