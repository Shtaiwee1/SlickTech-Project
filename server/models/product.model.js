const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Product name is required"],
      minlength: [3, "Product name must be at least 3 characters"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price must be greater than zero"],
    },
    desc: {
      type: String,
      required: [true, "Description is required"],
      minlength: [20, "Description must be at least 20 characters"],
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports.Product = mongoose.model("Product", ProductSchema);
