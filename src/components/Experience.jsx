import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import data from "../assets/data/experience.json";

function Experience() {
    const [tablistItems, setTabListItems] = useState([]);
    const [tabPanels, setTabPanels] = useState([]);

    useEffect(() => {
        setTabListItems(data.map((elem) => <Tab> {elem.company} </Tab>));
        setTabPanels(
            data.map((elem) => {
                return (<TabPanel>
                    <div className="panel-content">
                        <h5>{elem.title}</h5>
                        <p>{elem.date}</p>
                        <ul className="fa-ul">
                            {elem.roles.map(role => <li><span className="fa-li"><i className="fa-sharp fa-solid fa-angle-right"></i></span>{role}</li>)}
                        </ul>
                    </div>
                </TabPanel>);
            })
        );
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
