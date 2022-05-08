import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { TextField, Button, Alert } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://localhost:8000/api/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response);
        setErrors(err.response.data);
      });
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

  return (
    <>
      <h2>Login</h2>
      {errors && <Alert severity="error">Invalid Email or Password</Alert>}

      <Form onSubmit={submitHandler}>
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
          placeholder="Email"
          className="mb-3"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          fullWidth
        />

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

        <Button
          type="submit"
          className="float-end"
          variant="contained"
          color="success"
        >
          Login
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
