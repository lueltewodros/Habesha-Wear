const api = import.meta.env.VITE_API_URL;

export async function fetchProducts() {
  const res = await fetch(`${api}/products`);
  const data = await res.json();
  return data;
}
