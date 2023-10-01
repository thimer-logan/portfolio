import React from "react";
import { useQuery } from "react-query";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Icon from "./Icon";
import { fetchCollection } from "../firebase";

function Skills() {
  const { data, status } = useQuery("skills", () => fetchCollection("skills"));

  return (
    <section id="skills">
      <h2 className="section-heading">Skills</h2>
      <Container>
        <Row>
          {status === "error" && <p>Error fetching data</p>}
          {status === "loading" && <p>Fetching data...</p>}
          {status === "success" &&
            data
              .sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0))
              .map((elem) => (
                <Col className="skill" md={6} lg={4} key={elem.id}>
                  <Icon name={elem.name} className={"skills-icon"} />
                  <h4>{elem.name}</h4>
                  <ul className="list fa-ul">
                    {elem.description.map((role, index) => (
                      <li key={index}>
                        <span className="fa-li">
                          <i className="fa-sharp fa-solid fa-angle-right"></i>
                        </span>
                        {role}
                      </li>
                    ))}
                  </ul>
                </Col>
              ))}
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
