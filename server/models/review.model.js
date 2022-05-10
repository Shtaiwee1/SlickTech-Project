const mongoose = require("mongoose");
const ReviewSchema = new mongoose.Schema(
  {
    comment: {
      type: String,
    },
    rating: {
      type: Number,
      required: [true, "Rating is required"],
      min: [1, "Rating must be greater than zero"],
      max: [5, "Rating must be between one and five"],
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  },
  { timestamps: true }
);
module.exports.Review = mongoose.model("Review", ReviewSchema);
