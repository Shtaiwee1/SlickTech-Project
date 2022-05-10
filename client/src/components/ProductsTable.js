import React from "react";
import { Table, Button } from "react-bootstrap";

import { Link } from "react-router-dom";

const UsersTable = (props) => {
  const { products } = props;
  return (
    <Table striped bordered hover variant="dark" responsive>
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
                <Button variant="success" className="me-2">
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
