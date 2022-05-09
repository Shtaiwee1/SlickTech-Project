import React from "react";
import { AppBar, IconButton, Toolbar, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";

export const MuiNavbar = () => {
  const { pathname } = useLocation();
  return (
    <AppBar style={{ backgroundColor: "black", position: "fixed" }}>
      <Toolbar>
        <IconButton size="large" edge="start" color="success" aria-label="logo">
          <img
            src={require("../images/logo-medium.png")}
            height={40}
            width={145}
            alt=""
          />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        ></Typography>
        <Stack direction="row" spacing={7}>
          <Link
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "18px",
            }}
            to="/Home"
          >
            Home
          </Link>
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

          {pathname.includes("/about") ? (
            <></>
          ) : (
            <>
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
            </>
          )}
          <Link
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "18px",
              marginRight: "10px",
            }}
            to="/"
          >
            Logout
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default MuiNavbar;
