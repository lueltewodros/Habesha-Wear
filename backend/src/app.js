import http from "http";
import "dotenv/config";
import connectDB from "./config/db.js";
import {
  createProduct,
  updateProductStock,
  returnProducts,
} from "./routes/product.js";
import { getCart, modifyCart } from "./routes/cart.js";

// Connect to Database
connectDB();

const PORT = process.env.PORT || 5000;

const server = http.createServer(async (req, res) => {
  // CORS Headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS",
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // Handle OPTIONS for CORS
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  // Basic Routing
  if (req.url === "/api/products" && req.method === "GET") {
    await returnProducts(req, res);
  } else if (req.url === "/api/cart" && req.method === "GET") {
    await getCart(req, res);
  } else if (req.url === "/api/cart" && req.method === "POST") {
    await modifyCart(req, res);
  } else if (req.url === "/api/products" && req.method === "POST") {
    await createProduct(req, res);
  } else if (req.url === "/api/products/stock" && req.method === "PUT") {
    await updateProductStock(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Route not found" }));
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
