import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import ProjectsList from "../components/ProjectsList";
import LogOutButton from "../components/LogOutButton";

const Main = () => {
  const [projects, setProjects] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/projects", { withCredentials: true })
      .then((res) => {
        setProjects(res.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  const changeToInProgress = (id, idx) => {
    axios
      .put(
        `http://localhost:8000/api/projects/${id}`,
        { status: "inprogress" },
        { withCredentials: true }
      )
      .then((res) => {
        setProjects(
          projects.map((project) => {
            if (project._id === id) {
              return res.data;
            }
            return project;
          })
        );
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const changeToCompleted = (id, idx) => {
    axios
      .put(
        `http://localhost:8000/api/projects/${id}`,
        { status: "completed" },
        { withCredentials: true }
      )
      .then((res) => {
        setProjects(
          projects.map((project) => {
            if (project._id === id) {
              return res.data;
            }
            return project;
          })
        );
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const removeProject = (id, idx) => {
    axios
      .delete(
        `http://localhost:8000/api/projects/${id}`,
        { status: "completed" },
        { withCredentials: true }
      )
      .then((res) => {
        setProjects(projects.filter((project) => project._id !== id));
      })
      .catch((err) => {
        console.error(err);
      });
  };

  /*  const removeFromDom = (id) => {
    setAthletes(athletes.filter((athlete) => athlete._id !== id));
  };
 */
  return (
    <div>
      <Container className="mt-5">
        <Row>
          <h2>Project Manager</h2>
        </Row>
        <Row className="mb-5">
          <Col>
            <LogOutButton />
          </Col>
        </Row>
        {loaded && (
          <Row>
            <Col>
              <ProjectsList
                clickHandler={changeToInProgress}
                listType="backlog"
                projects={projects.filter(
                  (project) => project.status === "backlog"
                )}
              />
            </Col>
            <Col>
              <ProjectsList
                clickHandler={changeToCompleted}
                listType="inprogress"
                projects={projects.filter(
                  (project) => project.status === "inprogress"
                )}
              />
            </Col>
            <Col>
              <ProjectsList
                clickHandler={removeProject}
                listType="completed"
                projects={projects.filter(
                  (project) => project.status === "completed"
                )}
              />
            </Col>
          </Row>
        )}
        <Row className="my-5">
          <Col>
            <Link className="float-start btn btn-primary" to="/projects/new">
              + Add a new Project
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
