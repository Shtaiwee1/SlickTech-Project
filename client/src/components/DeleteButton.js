import React from "react";
import axios from "axios";
import { Button } from "@mui/material";
const DeleteButton = (props) => {
  const { successCallBack, id } = props;

  const deleteHandler = () => {
    axios
      .delete(`http://localhost:8000/api/reviews/${id}`)
      .then((res) => {
        console.log(res);
        successCallBack(id);
      })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };
  return (
    <Button
      size="small"
      onClick={deleteHandler}
      color="error"
      variant="contained"
      className="float-end"
    >
      Delete
    </Button>
  );
};

export default DeleteButton;
