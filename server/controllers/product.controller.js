const { Product } = require("../models/product.model");

module.exports.createProduct =  async (req, res) => {
    const {title, price, desc}=req.body;
    Product.create(
        {
            title,
            price,
            desc,
            image: req.file.filename,
        }
    )
        .then((product) => res.json(product))
        .catch((err) => res.status(400).json(err));
    };

    module.exports.getAllProduct = (req, res) => {
        Product.find({})
            .sort("dueDate")
            .then((projects) => res.json(projects))
            .catch((err) => res.status(400).json(err));
        };