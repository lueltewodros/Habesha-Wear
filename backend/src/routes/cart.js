import Cart from "../models/Cart.js";

import Product from "../models/Product.js";

export const getCart = async (req, res) => {
  try {
    let cart = await Cart.findOne().populate("items.productId");
    if (!cart) {
      cart = new Cart({ items: [] });
      await cart.save();
    }
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(cart));
  } catch (error) {
    console.error("Cart Error:", error);
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Server Error", error: error.message }));
  }
};

// Add to cart with quantity logic

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

export const addToCart = async (req, res) => {
  try {
    const data = await getRequestBody(req);
    const { productId, quantity } = data;
    if (!productId || !quantity || quantity < 1) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Invalid product or quantity" }));
      return;
    }

    // Optionally: check if product exists
    const product = await Product.findById(productId);
    if (!product) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Product not found" }));
      return;
    }

    let cart = await Cart.findOne();
    if (!cart) {
      cart = new Cart({ items: [] });
    }

    const itemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId,
    );
    if (itemIndex > -1) {
      // Product exists in cart, increase quantity
      const intermediateQuantity = cart.items[itemIndex].quantity + quantity;
      if (intermediateQuantity < 1) {
        // Remove item if quantity goes below 1
        cart.items.splice(itemIndex, 1);
      } else {
        cart.items[itemIndex].quantity = intermediateQuantity;
      }
    } else {
      // Add new product to cart
      cart.items.push({ productId, quantity });
    }

    await cart.save();
    await cart.populate("items.productId");
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(cart));
  } catch (error) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Server Error", error }));
  }
};

export const removeFromCart = async (req, res) => {
  try {
    const data = await getRequestBody(req);
    const { productId } = data;
    if (!productId) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Invalid product" }));
      return;
    }

    let cart = await Cart.findOne();
    if (!cart) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Cart not found" }));
      return;
    }

    const itemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId,
    );
    if (itemIndex > -1) {
      cart.items.splice(itemIndex, 1);
      await cart.save();
    }

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(cart));
  } catch (error) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Server Error", error }));
  }
};
