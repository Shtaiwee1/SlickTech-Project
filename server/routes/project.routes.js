const UserController = require("../controllers/user.controller");
const ReviewController = require("../controllers/review.controller");
const ProductController = require("../controllers/product.controller");
const { authenticate } = require("../config/jwt.config");
const { upload } = require("../config/multer.config");
module.exports = function (app) {
  app.get("/api/reviews", authenticate, ReviewController.getAllReviews);
  app.get(
    "/api/getProductReviews/:productId",
    ReviewController.getProductReviews
  );
  app.get("/api/getUserReviews", authenticate, ReviewController.getUserReviews);
  app.post("/api/reviews", authenticate, ReviewController.createReview);
  app.put("/api/reviews/:id", authenticate, ReviewController.updateReview);
  app.delete("/api/reviews/:id", ReviewController.deleteReview);

  // User Routes
  app.post("/api/register", upload.single("image"), UserController.register);
  app.post("/api/login", UserController.login);
  app.get("/api/getAllUsers", authenticate, UserController.getAllUsers);
  app.put(
    "/api/updateProfile",
    upload.single("image"),
    UserController.updateUser
  );
  app.get("/api/logout", UserController.logout);
  app.get("/api/check_login", UserController.checkLogIn);
  app.put("/api/addToCart", authenticate, UserController.addToCart);
  app.put("/api/removeFromCart", authenticate, UserController.removeFromCart);
  app.put("/api/makeAdmin", authenticate, UserController.makeAdmin);
  app.get("/api/getCart", authenticate, UserController.getCart);
  app.put("/api/clearCart", authenticate, UserController.clearCart);
  //product api
  app.post(
    "/api/addProduct",
    upload.single("image"),
    ProductController.createProduct
  );
  app.get("/api/allProduct", ProductController.getAllProduct);
  app.get("/api/products/:id", ProductController.getProduct);
  app.put(
    "/api/products/:id",
    upload.single("image"),
    ProductController.updateProduct
  );
};
