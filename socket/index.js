import { Server } from "socket.io";

const io = new Server({ 
    cors:{
        origin:"http://localhost:3000"
    },
});

io.on("connection", (socket) => {
    socket.on("disconnect",()=>console.log("some one has left"))
    io.emit('first-message','hello this is test')
});

io.listen(5000);