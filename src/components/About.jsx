import React from "react";
import { useQuery } from "react-query";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { fetchCollection } from "../firebase";

function About() {
  const { data: content, status } = useQuery("about", () =>
    fetchCollection("about")
  );

  return (
    <section id="about">
      <h2 className="section-heading">About me</h2>
      {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && <p>Fetching data...</p>}
      {status === "success" && (
        <Container>
          <Row>
            <Col>
              <img src={process.env.PUBLIC_URL + content.img} alt="jane-doe" />
            </Col>
            <Col className="about-box">
              <h6>{content.heading}</h6>
              <p>{content.description}</p>
              <p>Some of my interests include:</p>
              <ul className="list fa-ul">
                {"interests" in content
                  ? content.interests.map((role, index) => (
                      <li key={index}>
                        <span className="fa-li">
                          <i className="fa-sharp fa-solid fa-angle-right"></i>
                        </span>
                        {role}
                      </li>
                    ))
                  : null}
              </ul>
            </Col>
          </Row>
        </Container>
      )}
    </section>
  );
}

export default About;
