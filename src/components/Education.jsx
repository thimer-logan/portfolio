import React from "react";
import { useQuery } from "react-query";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { fetchCollection } from "../firebase";
import { Fade, Slide } from "react-awesome-reveal";

function Education() {
  const { data, status } = useQuery("education", () =>
    fetchCollection("education")
  );

  return (
    <section id="education">
      <Slide triggerOnce cascade>
        <h2 className="section-heading">Education</h2>
      </Slide>
      <Fade triggerOnce cascade delay={500}>
        <Container>
          {status === "error" && <p>Error fetching data</p>}
          {status === "loading" && <p>Fetching data...</p>}
          {status === "success" &&
            data.map((elem) => {
              return (
                <Row className="education-row" key={elem.id}>
                  <Col md={3}>
                    <img
                      src={process.env.PUBLIC_URL + elem.img}
                      alt={elem.school}
                      height={100}
                    />
                  </Col>
                  <Col md={9}>
                    <h4>{elem.degree}</h4>
                    <h6>{elem.school}</h6>
                    <p>{elem.date}</p>
                  </Col>
                </Row>
              );
            })}
        </Container>
      </Fade>
    </section>
  );
}

export default Education;
