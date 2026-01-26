import { useState, useEffect } from "react";
import CartContext from "./CartContext";
import {
  fetchCart,
  addToCart as apiAddToCart,
  removeFromCart as apiRemoveFromCart,
  clearCartAPI,
} from "../app";

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Initial fetch
  useEffect(() => {
    fetchCart()
      .then((data) => {
        setCartItems(data.items || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch cart:", err);
        setLoading(false);
      });
  }, []);

  const addToCart = async (productId, quantity) => {
    try {
      const data = await apiAddToCart(productId, quantity);
      console.log(data);
      setCartItems(data.items || []);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const removeFromCart = async (productId) => {
    try {
      const data = await apiRemoveFromCart(productId);
      setCartItems(data.items || []);
    } catch (error) {
      console.error("Error removing from cart:", error);
    }
  };

  const updateQuantity = async (productId, delta) => {
    // Determine the current quantity of the item
    // If we are decreasing and quantity is 1, it might be removed (handled by backend usually, but let's be safe)
    await addToCart(productId, delta);
  };

  const clearCart = async () => {
    try {
      const data = await clearCartAPI();
      setCartItems(data.items || []);
    } catch (error) {
      console.error("Error clearing cart:", error);
    }
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    loading,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
