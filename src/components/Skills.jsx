import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Icon from './Icon';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function Skills() {
    const [skills, setSkills] = useState([]);

    const fetchData = async () => {
        await getDocs(collection(db, "skills")).then((querySnapshot) => {
            const arr = [];
            querySnapshot.forEach(element => {                
                arr.push(element.data());
            });
            
            arr.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0));
            setSkills(arr);
        });
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
    <section id="skills">
        <h2 className="section-heading">Skills</h2>  
        <Container >
            <Row>
                {skills.map((elem) => {
                    return (
                        <Col className='skill' md={6} lg={4}>
                            <Icon name={elem.name} className={'skills-icon'}/>
                            <h4>{elem.name}</h4>
                            <ul className="list fa-ul">
                                {elem.description.map(role => <li><span className="fa-li"><i className="fa-sharp fa-solid fa-angle-right"></i></span>{role}</li>)}
                            </ul>
                        </Col>
                    )
                })}
            </Row>        
        </Container>
            
    </section>
    );
}

export default Skills;