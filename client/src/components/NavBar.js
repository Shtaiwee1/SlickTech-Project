import React, { useEffect, useState } from "react";
import { AppBar, IconButton, Toolbar, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
export const MuiNavbar = () => {
  const [user, setUser] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const logOutHandler = () => {
    axios
      .get("http://localhost:8000/api/logout", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

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

  const { pathname } = useLocation();
  return (
    <>
      {loaded && (
        <AppBar style={{ backgroundColor: "black", position: "fixed" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="success"
              aria-label="logo"
            >
              <Link to="/home">
                <img
                  src={require("../images/logo-medium.png")}
                  height={40}
                  width={145}
                  alt=""
                />
              </Link>
            </IconButton>
            <Typography
              variant="h6"
              component="span"
              sx={{ flexGrow: 1 }}
            ></Typography>
            <Stack direction="row" spacing={7}>
              {!pathname.includes("login_register") && (
                <Link
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontWeight: "600",
                    fontSize: "18px",
                    marginRight: "10px",
                  }}
                  to="/dashboard"
                >
                  Dashboard
                </Link>
              )}
              {!pathname.includes("login_register") && (
                <Link
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontWeight: "600",
                    fontSize: "18px",
                    marginRight: "10px",
                  }}
                  to="/addProduct"
                >
                  Add Product
                </Link>
              )}
              {!pathname.includes("home") && (
                <Link
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontWeight: "600",
                    fontSize: "18px",
                  }}
                  to="/home"
                >
                  Home
                </Link>
              )}
              {!pathname.includes("login_register") &&
                !pathname.includes("profile") && (
                  <Link
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontWeight: "600",
                      fontSize: "18px",
                    }}
                    to="/profile"
                  >
                    My Profile
                  </Link>
                )}
              {!pathname.includes("login_register") &&
                !pathname.includes("cart") && (
                  <Link
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontWeight: "600",
                      fontSize: "18px",
                    }}
                    to="/cart"
                  >
                    My Cart
                  </Link>
                )}
              {!pathname.includes("/about") && (
                <Link
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontWeight: "600",
                    fontSize: "18px",
                  }}
                  to="/about_us"
                >
                  About
                </Link>
              )}
              {!pathname.includes("login_register") &&
                !pathname.includes("chat") && (
                  <Link
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontWeight: "600",
                      fontSize: "18px",
                      marginRight: "10px",
                    }}
                    to="/chat"
                  >
                    Chat
                  </Link>
                )}
              {!pathname.includes("login_register") &&
                Object.keys(user).length !== 0 && (
                  <Link
                    onClick={logOutHandler}
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontWeight: "600",
                      fontSize: "18px",
                      marginRight: "10px",
                    }}
                    to="/login_register"
                  >
                    Logout
                  </Link>
                )}
              {!pathname.includes("login_register") &&
                Object.keys(user).length === 0 && (
                  <Link
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontWeight: "600",
                      fontSize: "18px",
                      marginRight: "10px",
                    }}
                    to="/login_register"
                  >
                    Login
                  </Link>
                )}
            </Stack>
          </Toolbar>
        </AppBar>
      )}
    </>
  );
};

export default MuiNavbar;
