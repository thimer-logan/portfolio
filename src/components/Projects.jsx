import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Projects() {
    return (
    <section id="projects">
        <h2 className="section-heading">Projects</h2>
        <Container>
            <Row>
                <Col md={6} lg={4}>
                    <Card className='project-card-outer'>
                        <Card className='project-card'>
                            <Card.Img className='card-img' variant='top' src={process.env.PUBLIC_URL + '/assets/images/foodiecentral.png'} />
                            <Card.Body>
                                <Card.Title>Foodie Central</Card.Title>
                            </Card.Body>
                        </Card>
                    </Card>
                </Col>
            </Row>
        </Container>
    </section>
    );
}

export default Projects;