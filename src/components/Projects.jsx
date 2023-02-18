import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function Projects() {
    const [projects, setProjects] = useState([]);
    const fetchData = async () => {
        await getDocs(collection(db, "projects")).then((querySnapshot) => {
            const arr = [];
            querySnapshot.forEach(element => {                
                arr.push(element.data());
            });
            
            arr.sort((a,b) => (a.id < b.id) ? 1 : ((b.id < a.id) ? -1 : 0));
            setProjects(
                arr.map((elem) => {
                    return (
                    <Col md={6} lg={4}>
                        <Card className='project-card-outer'>
                            <Card className='project-card'>
                                <Card.Img className='card-img' variant='top' src={process.env.PUBLIC_URL + elem.img} />
                                <Card.Body>
                                    <Card.Title>{elem.name}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Card>
                    </Col>);
                })
            );
        });
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
    <section id="projects">
        <h2 className="section-heading">Projects</h2>
        <Container>
            <Row>
                {projects}
            </Row>
        </Container>
    </section>
    );
}

export default Projects;