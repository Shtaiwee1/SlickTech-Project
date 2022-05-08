const { Review } = require("../models/review.model");

module.exports.index = (request, response) => {
  response.json({
    message: "Hello World",
  });
};

module.exports.createReview = (req, res) => {
  Review.create(req.body)
    .then((review) => res.json(review))
    .catch((err) => res.status(400).json(err));
};

module.exports.getAllReviews = (req, res) => {
  Review.find({})
    .populate("user")
    .populate("product")
    .sort("dueDate")
    .then((reviews) => res.json(reviews))
    .catch((err) => res.status(400).json(err));
};

/* module.exports.getReview = (req, res) => {
  const { id } = req.params;
  Athlete.findOne({ _id: id })
    .then((athlete) => res.json(athlete))
    .catch((err) => res.status(400).json(err));
}; */

module.exports.deleteReview = (req, res) => {
  const { id } = req.params;
  Review.deleteOne({
    _id: id,
  })
    .then((review) => res.json(review))
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports.updateReview = (req, res) => {
  const { id } = req.params;
  Review.findOneAndUpdate(
    {
      _id: id,
    },
    req.body,
    { new: true, runValidators: true }
  )
    .then((updatedReview) => res.json(updatedReview))
    .catch((err) => res.status(400).send(err));
};
