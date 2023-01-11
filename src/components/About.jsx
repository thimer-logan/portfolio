import React, { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import {SiCplusplus, SiJava, SiPython} from "react-icons/si";
import { Container, Row, Col } from "react-bootstrap";

function About() {

    const [content, setContent] = useState([]);
    const [skills, setSkills] = useState([]);

    const fetchData = async () => {
        await getDocs(collection(db, "about")).then((querySnapshot) => {
            const arr = [];
            querySnapshot.forEach(element => {                
                arr.push({id: element.id, data: element.data().description});
            });
            
            setContent(arr);
        });

        await getDocs(collection(db, "skills")).then((querySnapshot) => {
            const arr = [];
            querySnapshot.forEach(element => {
                
                arr.push({id: element.id, data: element.data()});
            });
            
            arr.sort((a,b) => (a.data.value < b.data.value) ? 1 : ((b.data.value < a.data.value) ? -1 : 0))
            setSkills(arr);
        });
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <section id="about" >
            <h2 className="section-heading">About me</h2>
            <div className="about-box">

            
            <div className="col-lg-6">
                <div className="type-box">
                    {content.map((elem) => {
                    return <p key={elem.id}>{elem.data}</p>
                    })}
                </div>
            </div>
            <div className="col-lg-6">
                <h3>My Skills</h3>
                <Container fluid>
                    {/* <Row className="roww">
                        <Col>
                            <CircularProgressbarWithChildren value={90}
                                text={`C++`}
                                styles={buildStyles({
                                textColor: "white",
                                pathColor: "#33ff40",
                                })}>
                                
                            </CircularProgressbarWithChildren>
                        </Col>
                        <Col>
                            <CircularProgressbarWithChildren value={80}
                                text={`Java`}
                                styles={buildStyles({
                                textColor: "white",
                                pathColor: "#33ff40",
                                })}>
                                
                            </CircularProgressbarWithChildren>
                        </Col>
                        <Col>
                            <CircularProgressbarWithChildren value={70}
                                text={`Python`}
                                styles={buildStyles({
                                textColor: "white",
                                pathColor: "#33ff40",
                                })}>
                                
                            </CircularProgressbarWithChildren>
                        </Col>                        
                    </Row> */}
                    {/* <Row className="roww">
                        <Col>
                            <CircularProgressbarWithChildren value={90}
                                styles={buildStyles({                                
                                pathColor: "#33ff40",
                                })}>
                                <SiCplusplus className="skills-icon"></SiCplusplus>
                            </CircularProgressbarWithChildren>
                        </Col>
                        <Col>
                            <CircularProgressbarWithChildren value={80}
                                styles={buildStyles({                                
                                pathColor: "#33ff40",
                                })}>
                                <SiJava className="skills-icon"></SiJava>
                            </CircularProgressbarWithChildren>
                        </Col>
                        <Col>
                            <CircularProgressbarWithChildren value={70}
                                styles={buildStyles({                                
                                pathColor: "#33ff40",
                                })}>
                                <SiPython className="skills-icon"></SiPython>
                            </CircularProgressbarWithChildren>
                        </Col>
                    </Row> */}
                    {/* <Row>
                    {skills.map((elem) => {
                        return <Col><ProgressBar title={elem.data.name} color={"#33ff40"} percent={elem.data.value} /></Col>
                    })}</Row> */}
                    
                    {skills.map((elem) => {
                        return <Row><Col><ProgressBar title={elem.data.name} color={"#33ff40"} percent={elem.data.value} /></Col></Row>
                    })}
                </Container>
                            
                {/* <div className="skills-box">

                    {skills.map((elem) => {
                        return <ProgressBar title={elem.data.name} color={elem.data.color} percent={elem.data.value} />
                    })}
                </div> */}
            </div>
            </div>
            
            
        </section>
    );
}

export default About;
