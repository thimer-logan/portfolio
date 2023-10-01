import React from "react";
import { useQuery } from "react-query";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { fetchCollection } from "../firebase";

function Projects() {
  const { data, status } = useQuery("projects", () =>
    fetchCollection("projects")
  );

  return (
    <section id="projects">
      <h2 className="section-heading">Projects</h2>
      <Container>
        <Row>
          {status === "error" && <p>Error fetching data</p>}
          {status === "loading" && <p>Fetching data...</p>}
          {status === "success" &&
            data.map((elem) => (
              <Col md={6} lg={4} key={elem.id}>
                <Card className="project-card-outer">
                  <Card className="project-card" as="a" href={elem.link}>
                    <Card.Img
                      className="card-img"
                      variant="top"
                      src={process.env.PUBLIC_URL + elem.img}
                    />
                    <Card.Body>
                      <Card.Title>{elem.name}</Card.Title>
                    </Card.Body>
                  </Card>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
