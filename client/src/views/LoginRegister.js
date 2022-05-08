import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import RegisterForm from "../components/RegisterForm";
import LoginForm from "../components/LoginForm";

const LoginRegister = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col xs={10} md={8}>
          <Row className="my-5">
            <Col xs={12} md={6} className="me-md-3">
              <RegisterForm />
            </Col>
            <Col>
              <LoginForm />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginRegister;
