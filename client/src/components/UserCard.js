import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import axios from "axios";
import UpdateUserForm from "./UpdateUserForm";

const UserCard = () => {
  const [user, setUser] = useState({});
  const [msg, setMsg] = useState("");
  const [errors, setErrors] = useState({});
  const [loaded, setLoaded] = useState(false);

  const updateUser = (updatedUser) => {
    axios
      .put("http://localhost:8000/api/updateProfile", updatedUser, {
        withCredentials: true,
        headers: { "content-type": "multipart/form-data" },
      })
      .then((res) => {
        setUser(res.data.updatedUser);
        setMsg(res.data.msg);
      })
      .catch((err) => {
        console.log(err.response);
        setErrors(err.response.data.errors);
      });
  };

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
        <Card>
          <Row className="justify-content-center">
            <Col xs={12} sm={10} md={8} lg={6}>
              {user.image && (
                <Card.Img
                  variant="top"
                  src={require("../images/" + user.image)}
                />
              )}
              {!user.image && (
                <Card.Img
                  variant="top"
                  src={require("../images/userPlaceholder.png")}
                />
              )}
            </Col>
          </Row>
          <Card.Body>
            <Card.Title>
              {user.firstName} {user.lastName}
            </Card.Title>
            {loaded && (
              <UpdateUserForm
                msg={msg}
                errors={errors}
                updateUser={updateUser}
                user={user}
              />
            )}
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default UserCard;
