import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const [user, setUser] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(
        "http://localhost:8000/api/check_login",

        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
        setUser(res.data);
        setLoaded(true);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  return (
    <>
      {loaded &&
        (Object.keys(user).length !== 0 ? (
          children
        ) : (
          <Navigate to="/login_register" />
        ))}
    </>
  );
};

export default PrivateRoute;
