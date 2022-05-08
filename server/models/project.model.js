const mongoose = require("mongoose");
const ProjectSchema = new mongoose.Schema(
  {
    project: {
      type: String,
      minlength: [3, "Project must be at least 3 characters!"],
      required: [true, "Project is required!"],
    },
    dueDate: {
      type: Date,
      required: [true, "Date is required!"],
    },
    status: {
      type: String,
      default: "backlog",
    },
  },
  { timestamps: true }
);
module.exports.Project = mongoose.model("Project", ProjectSchema);
