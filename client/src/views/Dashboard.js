import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import UsersTable from "../components/UsersTable";
import ProductsTable from "../components/ProductsTable";
import axios from "axios";
const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [loadedUsers, setLoadedUsers] = useState(false);
  const [products, setProducts] = useState([]);
  const [loadedProducts, setLoadedProducts] = useState(false);

  const makeAdmin = (id) => {
    axios
      .put(
        "http://localhost:8000/api/makeAdmin",
        { userId: id },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setUsers(
          users.map((user) => {
            if (user._id === id) {
              return res.data;
            }
            return user;
          })
        );
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/getAllUsers", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
        setLoadedUsers(true);
      })
      .catch((err) => {
        console.log(err.response);
      });

    axios
      .get("http://localhost:8000/api/allProduct", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
        setLoadedProducts(true);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col xs={12} md={10}>
          <Row className="my-5">
            {loadedUsers && <UsersTable makeAdmin={makeAdmin} users={users} />}
          </Row>
          <Row>{loadedProducts && <ProductsTable products={products} />}</Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
