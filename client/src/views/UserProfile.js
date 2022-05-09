import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import UserCard from "../components/UserCard";
const UserProfile = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col xs={10} sm={8} md={6}>
          <Row className="my-5">
            <UserCard />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;
