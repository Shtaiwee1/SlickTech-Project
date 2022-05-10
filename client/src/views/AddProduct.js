import * as React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Container from "@mui/material/Container";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";

export default function SignUp() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    formData.append("image", image);
    formData.append("desc", desc);

    axios
      .post("http://localhost:8000/api/addProduct", formData, {
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

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="backimage">
      <div style={{ marginTop: "150px" }}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Add Product
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              encType="multipart/form-data"
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  {"title" in errors && (
                    <Alert severity="error" className="mb-3">
                      {errors.title.message}
                    </Alert>
                  )}
                  <TextField
                    value={title}
                    autoComplete="given-name"
                    name="Name Product"
                    required
                    fullWidth
                    id="Name Product"
                    label="Product Name"
                    autoFocus
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  {"price" in errors && (
                    <Alert severity="error" className="mb-3">
                      {errors.price.message}
                    </Alert>
                  )}
                  <TextField
                    required
                    fullWidth
                    value={price}
                    id="price"
                    label="Price"
                    name="price"
                    autoComplete="enter price"
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Form.Group controlId="formFileLg" className="mb-3">
                    <Form.Label className="float-start">
                      Upload an image:
                    </Form.Label>
                    <Form.Control
                      type="file"
                      name="image"
                      size="lg"
                      onChange={imageHandler}
                    />
                  </Form.Group>
                </Grid>
                <Grid item xs={12}>
                  {"desc" in errors && (
                    <Alert severity="error" className="mb-3">
                      {errors.desc.message}
                    </Alert>
                  )}
                  <TextareaAutosize
                    value={desc}
                    aria-label="minimum height"
                    minRows={6}
                    placeholder="Description"
                    style={{ width: 400 }}
                    onChange={(e) => setDesc(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                Add Product
              </Button>
            </Box>
          </Box>
        </Container>
      </div>
    </div>
  );
}
