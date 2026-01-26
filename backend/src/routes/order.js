import Order from "../models/Order.js";

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

export const createOrder = async (req, res) => {
  try {
    const data = await getRequestBody(req);
    const { items, shippingAddress, totalPrice } = data;

    if (!items || items.length === 0) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "No items in order" }));
      return;
    }

    if (!shippingAddress || !totalPrice) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Missing required fields" }));
      return;
    }

    const order = new Order({
      items,
      shippingAddress,
      totalPrice,
    });

    const createdOrder = await order.save();

    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify(createdOrder));
  } catch (error) {
    console.error("Create Order Error:", error);
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Server Error", error: error.message }));
  }
};
