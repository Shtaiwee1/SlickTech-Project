import * as React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBar from '../components/NavBar';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

    const theme = createTheme();
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
        email: data.get('email'),
        password: data.get('password'),
        });
        const formData = new FormData();
        formData.append("title", title);
        formData.append("price", price);
        formData.append("image", image);
        formData.append("desc", desc);
        
        axios.post("http://localhost:8000/api/addProduct", formData, {
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
        <div className='backimage'>
        <NavBar />
        <div style={{marginTop:'150px'}}>
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
                {"title" in errors && (
                                <Alert style={{width:'400px',marginLeft:'14px'}} severity="error">{errors.title.message}</Alert>
                                )}
                {"price" in errors && (
                <Alert style={{width:'400px',marginLeft:'14px'}} severity="error">{errors.price.message}</Alert>
                )}
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
                  <TextareaAutosize
                    value={desc}
                    aria-label="minimum height"
                    minRows={6}
                    placeholder="add description"
                    style={{ width: 400 }}
                    onChange={(e) => setDesc(e.target.value)}
                  />
                </Grid>
                {"desc" in errors && (
                                <Alert style={{width:'400px',marginLeft:'14px'}} severity="error">{errors.desc.message}</Alert>
                                )}
                </Grid>
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Add Product
              </Button>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
        </div>
        </div>
    );
    
}
