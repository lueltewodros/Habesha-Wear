import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name is required"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "Product price is required"],
    min: 0,
  },
  category: {
    type: String,
    enum: ["women", "men", "shoes", "bags", "jewellery", "kids"],
    required: [true, "Product category is required"],
    trim: true,
  },
  images: {
    type: [String],
    default: [],
  },
  stock: {
    type: Number,
    min: 0,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
