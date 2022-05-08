    const mongoose = require("mongoose");
    const ProductSchema = new mongoose.Schema(
        {
        title: {
            type: String,
            required: [true, "name product is required"],
            minlength: [3, "First name must be at least 3 characters"],
        },
        price: {
            type: Number,
            required: [true, "price is required"],
            min: [3, "Last name must be at least 3 characters"],
        },
        desc: {
            type: String,
            required: [true, "description is required"],
            minlength: [20, "description must be at least 3 characters"],
        },
        image: {
            type: String,
        },
        },
        { timestamps: true }
    );
    module.exports.Product = mongoose.model("Product", ProductSchema);