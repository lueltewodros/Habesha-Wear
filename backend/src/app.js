import http from "http";
import "dotenv/config";
import connectDB from "./config/db.js";
import { createProduct } from "./routes/product.js";

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
  if (req.url === "/api/products" && req.method === "POST") {
    await createProduct(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Route not found" }));
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
