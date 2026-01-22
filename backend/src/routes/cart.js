import Cart from "../models/Cart";

export const getCart = async (req, res) => {
  try {
    let cart = await Cart.findOne().populate("items.productId");
    if (!cart) {
      cart = new Cart({ items: [] });
      await cart.save();
    }
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};
