import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import io from "socket.io-client";
const Chat = (props) => {
  const { user } = props;

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
      return [...prevMessages, { user, text, joinMessage: false }];
    });
    socket.emit("msg_from_user", {
      user,
      text,
      joinMessage: false,
    });
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

    socket.emit("register", {
      user,
      text: `${user.firstName + " " + user.lastName} has joined the chat!`,
      joinMessage: true,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);

  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h4>Chat with Users or Admins!</h4>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="border border-dark p-2" xs={8} md={6}>
          <div
            ref={mesRef}
            style={{
              maxHeight: "400px",
              overflowY: "scroll",
            }}
          >
            {messages.map((message, i) => (
              <div
                className={
                  message.joinMessage
                    ? "col-5 offset-7 rounded-2"
                    : message.user.id === user.id
                    ? "bg-primary col-5 text-light rounded-3"
                    : "bg-success col-5 offset-7 text-light rounded-3"
                }
                key={i}
              >
                {message.joinMessage ? (
                  message.user.id === user.id ? (
                    <p>You have joined the chat</p>
                  ) : (
                    message.text
                  )
                ) : (
                  <>
                    <p>
                      {message.user.id === user.id
                        ? "You "
                        : message.user.firstName + " "}
                      said:
                    </p>
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
                <Button
                  variant="success"
                  disabled={text.length === 0}
                  className="float-end"
                  type="submit"
                >
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
