import Product from "../models/Product.js";

// Helper to parse JSON body from request
const getRequestBody = (req) => {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      try {
        resolve(JSON.parse(body || "{}"));
      } catch (err) {
        reject(err);
      }
    });
  });
};

export const createProduct = async (req, res) => {
  try {
    const data = await getRequestBody(req);

    // Create new product using Mongoose
    const newProduct = new Product(data);
    const savedProduct = await newProduct.save();

    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Product created successfully",
        product: savedProduct,
      }),
    );
  } catch (error) {
    if (error.name === "ValidationError") {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          error: "Validation Error",
          details: Object.values(error.errors).map((err) => err.message),
        }),
      );
    } else {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Invalid request data or body" }));
    }
  }
};
