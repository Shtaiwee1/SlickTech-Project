import React from "react";
import { Table } from "react-bootstrap";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const UsersTable = (props) => {
  const { products } = props;
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Product Price ($)</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, idx) => (
          <tr key={idx}>
            <td>{product.title}</td>
            <th>{product.price}</th>
            <th>
              <Link to={"/products/" + product._id + "/edit"}>
                <Button
                  color="success"
                  size="small"
                  className="me-2"
                  variant="contained"
                >
                  Edit
                </Button>
              </Link>
            </th>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UsersTable;
