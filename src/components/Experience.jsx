import React from "react";
import { useQuery } from "react-query";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Tab from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Box from "@mui/material/Box";
import { fetchCollection } from "../firebase";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/system";
import { useViewport } from "../utils/utils";

function Experience() {
  const { data, status } = useQuery("experience", () =>
    fetchCollection("experience")
  );
  const [value, setValue] = React.useState(-1);
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

  if (status === "success" && value === -1) {
    setValue(Math.max(...data.map((o) => o.id)));
  }

  return (
    <section id="experience">
      <h2 className="section-heading">Experience</h2>
      {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && <p>Fetching data...</p>}
      {status === "success" && (
        <div className="exp-box">
          <ThemeProvider theme={theme}>
            <TabContext value={value.toString()}>
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  borderRight: 1,
                  borderColor: "divider",
                }}
              >
                <TabList
                  orientation={width > 600 ? "vertical" : "horizontal"}
                  variant="scrollable"
                  scrollButtons="auto"
                  onChange={handleChange}
                >
                  {data.map((elem) => (
                    <Tab
                      label={elem.company}
                      value={elem.id.toString()}
                      key={elem.id}
                      wrapped
                    />
                  ))}
                </TabList>
              </Box>

              {data.map((elem) => (
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
              ))}
            </TabContext>
          </ThemeProvider>
        </div>
      )}
    </section>
  );
}

export default Experience;
