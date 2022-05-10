const { Product } = require("../models/product.model");

module.exports.createProduct = async (req, res) => {
  const { title, price, desc } = req.body;
  let imageFile = "";
  if (req.file) {
    imageFile = req.file.filename;
  }
  Product.create({
    title,
    price,
    desc,
    image: imageFile,
  })
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json(err));
};

module.exports.getAllProduct = (req, res) => {
  Product.find({})
    .then((products) => res.json(products))
    .catch((err) => res.status(400).json(err));
};

module.exports.getProduct = (request, response) => {
  Product.findOne({ _id: request.params.id })
    .then((product) => response.json(product))
    .catch((err) => response.json(err));
};

module.exports.updateProduct = (req, res) => {
  const { id } = req.params;
  let imageFile = "";
  if (req.file) {
    imageFile = req.file.filename;
  }
  Product.findOneAndUpdate(
    {
      _id: id,
    },
    { ...req.body, image: imageFile },
    { new: true, runValidators: true }
  )
    .then((updatedProduct) => res.json(updatedProduct))
    .catch((err) => res.status(400).send(err));
};
