import React, { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

import io from "socket.io-client";
const UserForm = (props) => {
  const [name, setName] = useState("");

  const [socket] = useState(() => io(":8000"));

  const submitHandler = (e) => {
    e.preventDefault();
    props.changeUser(name);
    socket.emit("register", name);
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col className="border border-dark p-5" xs={6}>
          <h4>Get Started Right Now</h4>
          <Form onSubmit={submitHandler} className="my-3">
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="float-start">
                Please enter your chat name:
              </Form.Label>
              <Form.Control
                type="text"
                className="my-3"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
              <Button variant="success" className="float-end" type="submit">
                Join
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default UserForm;
