import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { Row, Col, Container } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
const Cart = () => {
  const [cart, setCart] = useState([]);
  const [loaded, setLoaded] = useState([]);

  const removeFromDom = (id) => {
    setCart(cart.filter((product) => product._id !== id));
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
                <Button color="success" variant="contained">
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
