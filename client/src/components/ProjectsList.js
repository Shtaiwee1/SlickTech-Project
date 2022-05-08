import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import moment from "moment";

const ProjectsList = (props) => {
  const { projects, listType, clickHandler } = props;

  return (
    <Container>
      <Row className="justify-content-center">
        <Row
          className={
            listType === "backlog"
              ? "bg-primary my-2 border border-dark rounded-2"
              : listType === "inprogress"
              ? "bg-warning my-2 border border-dark rounded-2"
              : "bg-success my-2 border border-dark rounded-2"
          }
        >
          <h4>
            {listType === "backlog"
              ? "Backlog List"
              : listType === "inprogress"
              ? "In Progess List"
              : "Completed List"}
          </h4>
        </Row>
        <Col
          style={{ overflowY: "scroll", height: "500px" }}
          className="border border-dark p-5"
        >
          {projects.map((project, i) => (
            <Row
              key={i}
              className="justify-content-center border border-dark p-3 my-3"
            >
              <h4>{project.project}</h4>
              <p
                className={moment(project.dueDate) < moment() && "text-danger"}
              >
                Due: {moment(project.dueDate).format("MM/DD/YYYY")}
              </p>
              {moment(project.dueDate) < moment() && (
                <p
                  className={
                    moment(project.dueDate) < moment() && "text-danger"
                  }
                >
                  (Post Due Date)
                </p>
              )}

              <Col>
                <Button
                  onClick={() => clickHandler(project._id, i)}
                  variant={
                    listType === "backlog"
                      ? "warning"
                      : listType === "inprogress"
                      ? "success"
                      : "danger"
                  }
                >
                  {listType === "backlog"
                    ? "Start Project"
                    : listType === "inprogress"
                    ? "Move to Completed"
                    : "Remove Project"}
                </Button>
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectsList;
