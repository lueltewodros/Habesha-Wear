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

export const updateProductStock = async (req, res) => {
  try {
    const data = await getRequestBody(req);
    const { id, stock } = data;

    if (!id || stock === undefined) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({ error: "Product ID and Stock amount are required" }),
      );
      return;
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { stock },
      { new: true, runValidators: true },
    );

    if (!updatedProduct) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Product not found" }));
      return;
    }

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Stock updated successfully",
        product: updatedProduct,
      }),
    );
  } catch (error) {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({ error: "Error updating stock", details: error.message }),
    );
  }
};

export const returnProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(products));
  } catch (error) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        error: "Error fetching products",
        details: error.message,
      }),
    );
  }
};
