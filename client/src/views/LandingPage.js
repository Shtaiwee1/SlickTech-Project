import React, { useState, useEffect } from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "../style/card.css";
import { Form } from "react-bootstrap";

import TextMobileStepper from "../components/TextMobileStepper";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [name, setName] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/allProduct")
      .then((res) => {
        setProduct(res.data);
        setLoaded(true);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
        }}
      >
        <TextMobileStepper />
      </div>
      <div>
        <Form>
          <div
            className="form-group"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Form.Control
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="search"
              style={{ margin: "4px", width: "600px", borderRadius: "5px" }}
            />
          </div>
        </Form>
      </div>
      <div style={{ margin: "1px", display: "clear", marginTop: "30px" }}>
        <Grid container spacing={3} style={{ margin: "4px" }}>
          {loaded &&
            product
              .filter((item, idx) => {
                return item.title.includes(name);
              })
              .map((product, index) => {
                return (
                  <Grid key={index} xs={3} item style={{ marginTop: "4px" }}>
                    <Grid container spacing={3} style={{ margin: "7px" }}>
                      <Paper>
                        {product.image && (
                          <img
                            src={require("../images/" + product.image)}
                            alt="ff"
                            className="imgCard"
                            style={{ height: "250px" }}
                          ></img>
                        )}
                        {!product.image && (
                          <img
                            src={require("../images/productPlaceholder.jpg")}
                            alt="ff"
                            className="imgCard"
                            style={{ height: "250px" }}
                          ></img>
                        )}

                        <Box paddingX={1}>
                          <Typography
                            variant="subtitle1"
                            gutterBottom
                            component="div"
                          >
                            {product.title}
                          </Typography>
                        </Box>
                        <Box padding={1}>
                          <Typography
                            variant="subtitle1"
                            gutterBottom
                            component="div"
                          >
                            Price: ${product.price}
                          </Typography>
                        </Box>
                        <Box padding={1}>
                          <Button
                            variant="contained"
                            onClick={() => navigate("/products/" + product._id)}
                          >
                            More Detail
                          </Button>
                        </Box>
                      </Paper>
                    </Grid>
                  </Grid>
                );
              })}
        </Grid>
      </div>
    </>
  );
};

export default Main;
