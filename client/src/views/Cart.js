import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Alert, Button } from "@mui/material";
import { Row, Col, Container } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
const Cart = () => {
  const [cart, setCart] = useState([]);
  const [loaded, setLoaded] = useState([]);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  let counter = 5;

  const removeFromDom = (id) => {
    setCart(cart.filter((product) => product._id !== id));
  };

  const clearCart = () => {
    axios
      .put(
        "http://localhost:8000/api/clearCart",
        {},
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
        setCart([]);
        setMsg(
          `Checkout successful you will be redirected to the home page in ${counter} seconds!`
        );
        const intervalId = setInterval(() => {
          counter--;
          setMsg(
            `Checkout successful you will be redirected to the home page in ${counter} seconds!`
          );
        }, 1000);
        setTimeout(() => {
          navigate("/");
          clearInterval(intervalId);
        }, 5000);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    axios
      .get(
        "http://localhost:8000/api/getCart",

        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
        setCart(res.data);
        setLoaded(true);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  const count = {};

  let total = 0;

  for (const product of cart) {
    if (count[product._id]) {
      count[product._id] += 1;
    } else {
      count[product._id] = 1;
    }
    total += product.price;
  }

  const ids = cart.map((product) => product._id);

  const filteredProducts = cart.filter(
    ({ _id }, index) => !ids.includes(_id, index + 1)
  );

  return (
    <>
      <Container style={{ marginTop: "7rem", marginBottom: "7rem" }}>
        <Row className="justify-content-center">
          <Col xs={10} md={8}>
            {msg && <Alert severity="success">{msg}</Alert>}
            <Row>
              {loaded &&
                filteredProducts.map((product, idx) => (
                  <ProductCard
                    successCallBack={removeFromDom}
                    key={idx}
                    product={product}
                    qty={count[product._id]}
                  />
                ))}
            </Row>
            <Row className="align-items-center mt-2">
              <Col className="text-start">Total: ${total}</Col>
              <Col className="text-end">
                <Button color="success" variant="contained" onClick={clearCart}>
                  Checkout
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cart;
