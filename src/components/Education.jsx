import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function Education() {
    const [education, setEducation] = useState([]);

    const fetchData = async () => {
        await getDocs(collection(db, "education")).then((querySnapshot) => {
            const arr = [];
            querySnapshot.forEach(element => {  
                const data = element.data();
                //data.img = require(element.data().img)              
                arr.push(data);
            });
            
            arr.sort((a,b) => (a.id < b.id) ? 1 : ((b.id < a.id) ? -1 : 0));
            setEducation(arr);
        });
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
    <section id="education">
        <h2 className='section-heading'>Education</h2>
        <Container>
            {education.map((elem) => {
                return (
                    <Row className='education-row'>
                        <Col md={3}>
                            <img src={process.env.PUBLIC_URL + elem.img} alt={elem.school} height={100}/>
                        </Col>
                        <Col md={9}>
                            <h4>{elem.degree}</h4>
                            <h5>{elem.school}</h5>
                            <p>{elem.date}</p>
                        </Col>
                    </Row>
                )
            })}
        </Container>
    </section>
    );
}

export default Education;