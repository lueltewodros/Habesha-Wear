const api = import.meta.env.VITE_API_URL;

export async function fetchProducts() {
  const res = await fetch(`${api}/products`);
  const data = await res.json();
  return data;
}

export async function fetchCart() {
  const res = await fetch(`${api}/cart`);
  const data = await res.json();
  return data;
}

export async function addToCart(productId, quantity) {
  const res = await fetch(`${api}/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ productId, quantity }),
  });
  const data = await res.json();
  return data;
}

export async function removeFromCart(productId) {
  const res = await fetch(`${api}/cart/remove`, {
    method: "POST", // Mapped to backend helper
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ productId }),
  });
  const data = await res.json();
  return data;
}

export async function clearCartAPI() {
  const res = await fetch(`${api}/cart`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
}

export async function fetchOrders() {
  const res = await fetch(`${api}/orders`);
  const data = await res.json();
  return data;
}
