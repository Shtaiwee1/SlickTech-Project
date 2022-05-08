const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

const cookieParser = require("cookie-parser");

require("./config/mongoose.config");

app.use(cookieParser());

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use(express.json(), express.urlencoded({ extended: true }));

require("./routes/project.routes")(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));
