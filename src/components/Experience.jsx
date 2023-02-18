import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function Experience() {
    const [tablistItems, setTabListItems] = useState([]);
    const [tabPanels, setTabPanels] = useState([]);

    const fetchData = async () => {
        await getDocs(collection(db, "experience")).then((querySnapshot) => {
            const arr = [];
            querySnapshot.forEach(element => {                
                arr.push(element.data());
            });
            
            arr.sort((a,b) => (a.id < b.id) ? 1 : ((b.id < a.id) ? -1 : 0));
            setTabListItems(arr.map((elem) => <Tab> {elem.company} </Tab>));
            setTabPanels(
                arr.map((elem) => {
                    return (<TabPanel>
                        <div className="panel-content">
                            <h5>{elem.title}</h5>
                            <p>{elem.date}</p>
                            <ul className="list fa-ul">
                                {elem.roles.map(role => <li><span className="fa-li"><i className="fa-sharp fa-solid fa-angle-right"></i></span>{role}</li>)}
                            </ul>
                        </div>
                    </TabPanel>);
                })
            );
        });
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <section id="experience">
            <h2 className="section-heading">Experience</h2>
            <div className="inner-content">
                <Tabs>
                    <TabList>{tablistItems}</TabList>

                    {tabPanels}
                </Tabs>
            </div>
        </section>
    );
}

export default Experience;
