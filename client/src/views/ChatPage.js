import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import axios from "axios";

import Chat from "../components/Chat";
const ChatPage = () => {
  const [user, setUser] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [socket] = useState(() => io(":8000"));

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/check_login", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
        setLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });

    socket.emit(
      "register",
      `${user.firstName} ${user.lastName} has joined the chat`
    );
  }, []);

  return <>{loaded && <Chat user={user} />}</>;
};

export default ChatPage;
