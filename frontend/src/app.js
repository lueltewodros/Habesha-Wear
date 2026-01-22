const api = import.meta.env.VITE_API_URL;

export async function fetchProducts() {
  const res = await fetch(`${api}/products`);
  const data = await res.json();
  console.log(data);
  return data;
}

export async function fetchCart() {
  const res = await fetch(`${api}/cart`);
  const data = await res.json();
  return data;
}

export async function addToCart(productId, quantity) {
  const res = await fetch(`${api}/cart/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ productId, quantity }),
  });
  const data = await res.json();
  return data;
}
