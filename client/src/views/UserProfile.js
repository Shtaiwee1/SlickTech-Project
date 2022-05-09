import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import UserCard from "../components/UserCard";
import UserReviews from "../components/UserReviews";
const UserProfile = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col xs={10} sm={8} lg={6}>
          <Row className="my-5">
            <UserCard />
            <UserReviews />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;
