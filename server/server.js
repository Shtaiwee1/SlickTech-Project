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

const server = app.listen(8000, () =>
  console.log("The server is all fired up on port 8000")
);

const io = require("socket.io")(server, { cors: true });

const history = [];

io.on("connection", (socket) => {
  console.log("Socket connected");

  socket.on("register", (userName) => {
    const data = {
      user: userName,
      text: `${userName} has joined the chat`,
      joinMessage: true,
    };
    history.push(data);
    socket.broadcast.emit("send_msg_to_others", data);
  });
  socket.emit("msg_history", history);
  socket.on("msg_from_user", (msg) => {
    console.log("Im her");
    history.push(msg);
    console.log(msg);
    socket.broadcast.emit("send_msg_to_others", msg);
  });
});
