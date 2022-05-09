import React from "react";
import { Button, Typography, Grid } from "@mui/material";
import ProductHeroLayout from "./ProductHeroLayout";
import video from "../Videos/tech.mp4";
import CardMo from "./CardMo";
import CardSa from "./CardSa";
import CardOd from "./CardOd.jsx";
import { motion } from "framer-motion";
import Navbar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div style={{ backgroundColor: "black" }}>
      <Navbar />

      <video
        style={{
          position: "absolute",
          left: "0.1px",
          top: "50px",
          width: "100%",
        }}
        loop
        autoPlay
        height="cover"
      >
        <source src={video} type="video/mp4" />
      </video>

      <ProductHeroLayout>
        {/* Increase the network loading priority of the background image. */}

        <Typography
          style={{ marginTop: "150px" }}
          color="inherit"
          align="center"
          variant="h2"
          marked="center"
        >
          About us
        </Typography>
        <Typography
          color="inherit"
          align="center"
          variant="h5"
          sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
        >
          This project is an electronics e-commerce website, where users can
          surf a variety of tech-related products, add products to their carts,
          in addition to reviewing and rating these products where these reviews
          will be visible to other users. Users can also search for products,
          view their carts, and view their profiles.
        </Typography>
        <Button
          style={{ backgroundColor: "#852EB8" }}
          variant="contained"
          size="large"
          component="a"
          onClick={() => navigate("/login_register")}
          sx={{ minWidth: 200 }}
        >
          Register
        </Button>
        <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
          Discover the experience
        </Typography>
      </ProductHeroLayout>

      <div>
        <Grid
          style={{ display: "flex", justifyContent: "space-around" }}
          container
          spacing={4}
        >
          <motion.Grid
            whileHover={{ scale: 1.02 }}
            style={{ position: "relative", top: "0px", marginBottom: "30px" }}
          >
            <CardMo />
          </motion.Grid>
          <motion.Grid
            whileHover={{ scale: 1.02 }}
            style={{ position: "relative", top: "0px" }}
          >
            <CardOd />
          </motion.Grid>
          <motion.Grid
            whileHover={{ scale: 1.02 }}
            style={{ position: "relative", top: "0px" }}
          >
            <CardSa />
          </motion.Grid>
        </Grid>
      </div>
    </div>
  );
};

export default AboutUs;
