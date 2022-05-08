import React from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LogOutButton = () => {
  const navigate = useNavigate();

  const logOutHandler = () => {
    axios
      .get("http://localhost:8000/api/logout", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        navigate("/login_register");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <Button onClick={logOutHandler} className="float-end">
      Log Out
    </Button>
  );
};

export default LogOutButton;
