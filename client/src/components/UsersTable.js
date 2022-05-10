import React from "react";
import { Table, Button } from "react-bootstrap";

import moment from "moment";

const UsersTable = (props) => {
  const { users, makeAdmin } = props;

  return (
    <Table striped bordered hover variant="dark" responsive>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Join Date</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, idx) => (
          <tr key={idx}>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{moment(user.createdAt).format("MM-DD-YYYY")}</td>
            <td>{user.isAdmin ? "Admin" : "Normal"}</td>
            <td>
              <Button
                onClick={() => makeAdmin(user._id)}
                variant={user.isAdmin ? "secondary" : "success"}
                disabled={user.isAdmin}
              >
                Make Admin
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UsersTable;
