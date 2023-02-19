import React, { useEffect, useState } from "react";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Tab from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Box from "@mui/material/Box";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/system";
import { useViewport } from "../utils/utils";

function Experience() {
    const [tablistItems, setTabListItems] = useState([]);
    const [tabPanels, setTabPanels] = useState([]);
    const [value, setValue] = React.useState(0);
    const { width, height } = useViewport();

    const theme = createTheme({
        palette: {
            primary: {
                main: "#33ff40",
                contrastText: "#ffffff",
            },
        },
        components: {
            MuiTab: {
                styleOverrides: {
                    root: {
                        color: "#ffffff",
                    },
                },
            },
        },
    });

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const fetchData = async () => {
        await getDocs(collection(db, "experience")).then((querySnapshot) => {
            const arr = [];
            querySnapshot.forEach((element) => {
                arr.push(element.data());
            });

            arr.sort((a, b) => (a.id < b.id ? 1 : b.id < a.id ? -1 : 0));
            setTabListItems(
                arr.map((elem) => <Tab label={elem.company} value={elem.id.toString()} key={elem.id} />)
            );
            setTabPanels(
                arr.map((elem) => {
                    return (
                        <TabPanel value={elem.id.toString()} key={elem.id}>
                            <div className="exp-content">
                                <h5>{elem.title}</h5>
                                <p>{elem.date}</p>
                                <ul className="list fa-ul">
                                    {elem.roles.map((role, index) => (
                                        <li key={index}>
                                            <span className="fa-li">
                                                <i className="fa-sharp fa-solid fa-angle-right"></i>
                                            </span>
                                            {role}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabPanel>
                    );
                })
            );

            setValue(Math.max(...arr.map(o => o.id)));
        });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <section id="experience">
            <h2 className="section-heading">Experience</h2>
            <div className="exp-box">
                <ThemeProvider theme={theme}>
                    <TabContext value={value.toString()}>
                        <Box sx={{ borderRight: 1, borderColor: "divider"}}>
                            <TabList
                                orientation={ width > 600 ? "vertical": "horizontal"}                                
                                variant="scrollable"
                                onChange={handleChange}
                            >
                                {tablistItems}
                            </TabList>
                        </Box>

                        {tabPanels}
                    </TabContext>
                </ThemeProvider>
            </div>
        </section>
    );
}

export default Experience;
