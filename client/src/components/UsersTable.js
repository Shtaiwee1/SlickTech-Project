import React from "react";
import { Table } from "react-bootstrap";
import { Button } from "@mui/material";

const UsersTable = () => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Join Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>Thornton</td>
          <td>
            <Button color="success" variant="contained">
              Make Admin
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default UsersTable;
