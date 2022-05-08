const { Project } = require("../models/project.model");

module.exports.index = (request, response) => {
  response.json({
    message: "Hello World",
  });
};

module.exports.createProject = (req, res) => {
  Project.create(req.body)
    .then((project) => res.json(project))
    .catch((err) => res.status(400).json(err));
};

module.exports.getAllProjects = (req, res) => {
  Project.find({})
    .sort("dueDate")
    .then((projects) => res.json(projects))
    .catch((err) => res.status(400).json(err));
};

/* module.exports.getProject = (req, res) => {
  const { id } = req.params;
  Athlete.findOne({ _id: id })
    .then((athlete) => res.json(athlete))
    .catch((err) => res.status(400).json(err));
}; */

module.exports.deleteProject = (req, res) => {
  const { id } = req.params;
  Project.deleteOne({
    _id: id,
  })
    .then((project) => res.json(project))
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports.updateProject = (req, res) => {
  const { id } = req.params;
  Project.findOneAndUpdate(
    {
      _id: id,
    },
    req.body,
    { new: true, runValidators: true }
  )
    .then((updatedProject) => res.json(updatedProject))
    .catch((err) => res.status(400).send(err));
};
