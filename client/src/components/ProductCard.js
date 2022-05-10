import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Button } from "@mui/material";
import axios from "axios";
const ProductCard = (props) => {
  const { product, qty, successCallBack } = props;

  const deleteHandler = () => {
    axios
      .put(
        `http://localhost:8000/api/removeFromCart`,
        {
          productId: product._id,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
        successCallBack(product._id);
      })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  return (
    <Card className="my-3 border border-3">
      <Row className="align-items-center">
        <Col xs={12} md={3} className="p-0 ps-2">
          <Card.Img src={require("../images/" + product.image)} />
        </Col>
        <Col>
          <Card.Body>
            <Card.Text>
              <Row>
                <Col xs={12} md={3} className="p-0 m-0">
                  <span className="me-3">{product.title}</span>
                </Col>
                <Col xs={12} md={3} className="p-0 m-0">
                  <span className="me-3">Price: ${product.price}</span>
                </Col>
                <Col xs={12} md={3} className="p-0 m-0">
                  <span className="me-3">Qty: {qty}</span>
                </Col>
                <Col xs={12} md={3} className="p-0 m-0">
                  <span className="me-3">Subtotal: ${product.price * qty}</span>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col>
                  <Button
                    size="small"
                    onClick={deleteHandler}
                    color="error"
                    variant="outlined"
                    className="float-md-end"
                  >
                    Remove From Cart
                  </Button>
                </Col>
              </Row>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default ProductCard;
