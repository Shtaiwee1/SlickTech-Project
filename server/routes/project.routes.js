const UserController = require("../controllers/user.controller");
const ProjectController = require("../controllers/project.controller");
const { authenticate } = require("../config/jwt.config");
const { upload } = require("../config/multer.config");
module.exports = function (app) {
  app.get("/api/projects", authenticate, ProjectController.getAllProjects);
  app.post("/api/projects", authenticate, ProjectController.createProject);
  app.put("/api/projects/:id", authenticate, ProjectController.updateProject);
  app.delete("/api/projects/:id", ProjectController.deleteProject);

  // User Routes
  app.post("/api/register", upload.single("image"), UserController.register);
  app.post("/api/login", UserController.login);
  app.get("/api/logout", UserController.logout);
  app.get("/api/check_login", UserController.checkLogIn);
};
