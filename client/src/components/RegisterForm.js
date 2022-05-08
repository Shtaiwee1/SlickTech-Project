import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { TextField, Alert, Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("address", address);
    formData.append("password", password);
    formData.append("confirmPassword", confirmPassword);
    formData.append("image", image);
    axios
      .post("http://localhost:8000/api/register", formData, {
        withCredentials: true,
        headers: { "content-type": "multipart/form-data" },
      })
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response);
        setErrors(err.response.data.errors);
      });
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
  const passwordHandler = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (value.length < 8 && value.length > 0) {
      setPasswordError("Password should be at least 8 characters");
    } else if (value.length >= 8) {
      setPasswordError("Looks Good!");
    } else if (value.length === 0) {
      setPasswordError("");
    }
  };
  const confirmPasswordHandler = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    if (value !== password && value.length > 0) {
      setConfirmPasswordError("Passwords must match!");
    } else if (value.length === 0) {
      setConfirmPasswordError("");
    } else {
      setConfirmPasswordError("Looks Good!");
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
      <h2>Register</h2>
      <Form onSubmit={submitHandler} encType="multipart/form-data">
        {"firstName" in errors && (
          <Alert severity="error">{errors.firstName.message}</Alert>
        )}
        <p
          className={
            firstNameError === "Looks Good!" ? "text-success" : "text-danger"
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
        <Form.Group controlId="formFileLg" className="mb-3">
          <Form.Label className="float-start">Upload an image:</Form.Label>
          <Form.Control
            type="file"
            name="image"
            size="lg"
            onChange={imageHandler}
          />
        </Form.Group>
        {"password" in errors && (
          <Alert severity="error">{errors.password.message}</Alert>
        )}
        <p
          className={
            passwordError === "Looks Good!" ? "text-success" : "text-danger"
          }
        >
          {passwordError}
        </p>
        <TextField
          value={password}
          onChange={passwordHandler}
          type="password"
          className="mb-3"
          id="outlined-basic"
          label="Password"
          variant="outlined"
          fullWidth
        />
        {"confirmPassword" in errors && (
          <Alert severity="error">{errors.confirmPassword.message}</Alert>
        )}
        <p
          className={
            confirmPasswordError === "Looks Good!"
              ? "text-success"
              : "text-danger"
          }
        >
          {confirmPasswordError}
        </p>
        <TextField
          value={confirmPassword}
          onChange={confirmPasswordHandler}
          type="password"
          className="mb-3"
          id="outlined-basic"
          label="Confirm Password"
          variant="outlined"
          fullWidth
        />
        <Button
          type="submit"
          className="float-end"
          variant="contained"
          color="success"
        >
          Register
        </Button>
      </Form>
    </>
  );
};

export default RegisterForm;
