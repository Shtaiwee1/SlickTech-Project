import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import io from "socket.io-client";
const Chat = (props) => {
  const { user } = props;

  const { firstName } = user;

  const [socket] = useState(() => io(":8000"));

  const [messages, setMessages] = useState([]);

  const [text, setText] = useState("");

  const mesRef = useRef(null);

  const scrollToBottom = () => {
    mesRef.current.scrollTop = mesRef.current.scrollHeight;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setMessages((prevMessages) => {
      return [...prevMessages, { firstName, text, joinMessage: false }];
    });
    socket.emit("msg_from_user", { firstName, text, joinMessage: false });
    setText("");
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    console.log("Is this running?");

    socket.on("msg_history", (messageHistory) => {
      setMessages(messageHistory);
    });
    socket.on("send_msg_to_others", (msg) => {
      console.log(msg);
      setMessages((prevMessages) => {
        return [...prevMessages, msg];
      });
    });
  }, [socket]);

  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h4>MERN Chat</h4>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="border border-dark p-2" xs={8} md={6}>
          <div
            ref={mesRef}
            style={{
              maxHeight: "600px",
              overflowY: "scroll",
            }}
          >
            {messages.map((message, i) => (
              <div
                className={
                  message.joinMessage
                    ? "col-5 offset-7"
                    : message.user === user
                    ? "bg-primary col-5 text-light"
                    : "bg-success col-5 offset-7 text-light"
                }
                key={i}
              >
                {message.joinMessage ? (
                  message.user === user ? (
                    <p>You have joined the chat</p>
                  ) : (
                    message.text
                  )
                ) : (
                  <>
                    <p>{message.user === user ? "You" : message.user} said:</p>{" "}
                    <p>{message.text}</p>
                  </>
                )}
              </div>
            ))}
          </div>
          <Form onSubmit={submitHandler}>
            <Row className="align-items-center">
              <Col>
                <Form.Control
                  type="text"
                  value={text}
                  className="my-3"
                  placeholder="Message"
                  onChange={(e) => setText(e.target.value)}
                />
              </Col>
              <Col xs={2}>
                <Button variant="success" className="float-end" type="submit">
                  Send
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Chat;
