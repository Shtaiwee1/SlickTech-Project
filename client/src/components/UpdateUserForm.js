import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { TextField, Alert, Button } from "@mui/material";

const UpdateUserForm = (props) => {
  const { user, updateUser, msg, errors } = props;

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [address, setAddress] = useState(user.address);
  const [image, setImage] = useState("");

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [addressError, setAddressError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("address", address);
    formData.append("image", image);
    updateUser(formData);
  };

  const firstNameHandler = (e) => {
    const value = e.target.value;
    setFirstName(value);
    if (value.length < 3 && value.length > 0) {
      setFirstNameError("First name must be at least 3 characters");
    } else if (value.length >= 3) {
      setFirstNameError("Looks Good!");
    } else if (value.length === 0) {
      setFirstNameError("");
    }
  };
  const lastNameHandler = (e) => {
    const value = e.target.value;
    setLastName(value);
    if (value.length < 3 && value.length > 0) {
      setLastNameError("Last name must be at least 3 characters");
    } else if (value.length >= 3) {
      setLastNameError("Looks Good!");
    } else if (value.length === 0) {
      setLastNameError("");
    }
  };
  const emailHandler = (e) => {
    const value = e.target.value;
    setEmail(value);
    const regEx = /^([\w-.]+@([\w-]+\.)+[\w-]+)?$/;

    if (!value.match(regEx)) {
      setEmailError("Please enter a valid email");
    } else if (value.length === 0) {
      setEmailError("");
    } else {
      setEmailError("Looks Good!");
    }
  };

  const addressHandler = (e) => {
    const value = e.target.value;
    setAddress(value);
    if (value.length < 5 && value.length > 0) {
      setAddressError("Address must be at least 5 characters");
    } else if (value.length >= 5) {
      setAddressError("Looks Good!");
    } else if (value.length === 0) {
      setAddressError("");
    }
  };

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <>
      {msg && <Alert severity="success">{msg}</Alert>}
      <Form onSubmit={submitHandler} encType="multipart/form-data">
        <Row>
          <Col xs={12} md={6}>
            {"firstName" in errors && (
              <Alert severity="error">{errors.firstName.message}</Alert>
            )}
            <p
              className={
                firstNameError === "Looks Good!"
                  ? "text-success"
                  : "text-danger"
              }
            >
              {firstNameError}
            </p>
            <TextField
              className="mb-3"
              value={firstName}
              onChange={firstNameHandler}
              type="text"
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              fullWidth
            />
          </Col>
          <Col xs={12} md={6}>
            {"lastName" in errors && (
              <Alert severity="error">{errors.lastName.message}</Alert>
            )}
            <p
              className={
                lastNameError === "Looks Good!" ? "text-success" : "text-danger"
              }
            >
              {lastNameError}
            </p>
            <TextField
              value={lastName}
              onChange={lastNameHandler}
              type="text"
              className="mb-3"
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              fullWidth
            />
          </Col>
        </Row>
        <Row>
          <Col>
            {"email" in errors && (
              <Alert severity="error">{errors.email.message}</Alert>
            )}
            <p
              className={
                emailError === "Looks Good!" ? "text-success" : "text-danger"
              }
            >
              {emailError}
            </p>
            <TextField
              value={email}
              onChange={emailHandler}
              type="email"
              className="mb-3"
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth
            />
          </Col>
          <Col>
            {"address" in errors && (
              <Alert severity="error">{errors.address.message}</Alert>
            )}
            <p
              className={
                addressError === "Looks Good!" ? "text-success" : "text-danger"
              }
            >
              {addressError}
            </p>
            <TextField
              value={address}
              onChange={addressHandler}
              type="text"
              className="mb-3"
              id="outlined-basic"
              label="Address"
              variant="outlined"
              fullWidth
            />
          </Col>
        </Row>

        <Form.Group controlId="formFileLg" className="mb-3">
          <Form.Label className="float-start">Upload an image:</Form.Label>
          <Form.Control
            type="file"
            name="image"
            size="lg"
            onChange={imageHandler}
          />
        </Form.Group>
        <Button
          type="submit"
          className="float-end"
          variant="contained"
          color="success"
        >
          Update Profile
        </Button>
      </Form>
    </>
  );
};

export default UpdateUserForm;
