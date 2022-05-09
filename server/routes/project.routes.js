const UserController = require("../controllers/user.controller");
const ReviewController = require("../controllers/review.controller");
const ProductController = require("../controllers/product.controller");
const { authenticate } = require("../config/jwt.config");
const { upload } = require("../config/multer.config");
module.exports = function (app) {
  app.get("/api/reviews", authenticate, ReviewController.getAllReviews);
  app.post("/api/reviews", authenticate, ReviewController.createReview);
  app.put("/api/reviews/:id", authenticate, ReviewController.updateReview);
  app.delete("/api/reviews/:id", ReviewController.deleteReview);

  // User Routes
  app.post("/api/register", upload.single("image"), UserController.register);
  app.post("/api/login", UserController.login);
  app.put(
    "/api/updateProfile",
    upload.single("image"),
    UserController.updateUser
  );
  app.get("/api/logout", UserController.logout);
  app.get("/api/check_login", UserController.checkLogIn);
  app.put("/api/addToCart", UserController.addToCart);
  app.get("/api/getCart", UserController.getCart);
  //product api
  app.post(
    "/api/addProduct",
    upload.single("image"),
    ProductController.createProduct
  );
  app.get("/api/allProduct", ProductController.getAllProduct);
};
