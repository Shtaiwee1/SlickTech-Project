import React, { useState } from "react";
import { Form, Button, Alert, Row, Col, Container } from "react-bootstrap";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const ProjectForm = () => {
  const [project, setProject] = useState("");
  const [date, setDate] = useState("");

  const [projectError, setProjectError] = useState("");
  const [dateError, setDateError] = useState("");

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8000/api/projects",
        { project, dueDate: date },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response);
        setErrors(err.response.data.errors);
      });
  };

  const projectHandler = (e) => {
    const value = e.target.value;
    setProject(value);
    if (value.length < 3 && value.length > 0) {
      setProjectError("Project should be at least 3 characters");
    } else if (value.length >= 3) {
      setProjectError("Looks Good!");
    } else if (value.length === 0) {
      setProjectError("");
    }
  };
  const dateHandler = (e) => {
    const value = e.target.value;
    setDate(value);

    if (value.length === 0) {
      setDateError("Date is required");
    } else if (value.length > 0) {
      setDateError("");
    }
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col xs={8}>
          <Link className="btn btn-primary float-end" to="/">
            Back to Dashboard
          </Link>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <h2 className="my-5">Project Manager</h2>
        <Col xs={6}>
          <h4>Plan a new Project</h4>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              {"project" in errors && (
                <Alert variant="danger">{errors.project.message}</Alert>
              )}
              <p
                className={
                  projectError === "Looks Good!"
                    ? "text-success"
                    : "text-danger"
                }
              >
                {projectError}
              </p>
              <Form.Control
                value={project}
                onChange={projectHandler}
                type="text"
                placeholder="Project"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              {"dueDate" in errors && (
                <Alert variant="danger">{errors.dueDate.message}</Alert>
              )}
              <p
                className={
                  dateError === "Looks Good!" ? "text-success" : "text-danger"
                }
              >
                {dateError}
              </p>
              <Form.Control value={date} onChange={dateHandler} type="date" />
            </Form.Group>
            <Row>
              <Button type="submit" variant="primary">
                Plan Project
              </Button>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectForm;
