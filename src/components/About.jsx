import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function About() {

    const [content, setContent] = useState({});

    const fetchData = async () => {
        await getDocs(collection(db, "about")).then((querySnapshot) => {
            console.log(querySnapshot.size);
            console.log(querySnapshot.docs.at(0).data());
            setContent(querySnapshot.docs.at(0).data());
        });
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <section id="about" >
            <h2 className="section-heading">About me</h2>
            <Container>
                <Row>
                    <Col>
                        <img src={process.env.PUBLIC_URL + content.img} alt="jane-doe"/>
                    </Col>
                    <Col className="about-box">
                        <h6>{content.heading}</h6>
                        <p>{content.description}</p>
                        <p>Some of my interests include:</p>
                        <ul className="list fa-ul">
                            {content.interests.map(role => <li><span className="fa-li"><i className="fa-sharp fa-solid fa-angle-right"></i></span>{role}</li>)}
                        </ul>
                    </Col>
                </Row>
            </Container>
            
            
            
        </section>
    );
}

export default About;
