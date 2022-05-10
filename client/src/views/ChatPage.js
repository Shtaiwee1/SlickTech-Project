import React, { useEffect, useState } from "react";

import axios from "axios";

import Chat from "../components/Chat";
import { Container, Row } from "react-bootstrap";
const ChatPage = () => {
  const [user, setUser] = useState({});
  const [loaded, setLoaded] = useState(false);

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
  }, []);

  return (
    <>
      {loaded && (
        <Container>
          <Row className="my-5">
            <Chat user={user} />
          </Row>
        </Container>
      )}
    </>
  );
};

export default ChatPage;
