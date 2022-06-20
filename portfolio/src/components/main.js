import React from "react";

import About from "./contents/about";
import Skill from "./contents/skill";
import Career from "./contents/career";
import Contact from "./contents/contact";

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


export default function Main() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <main>
            <CssBaseline />
            <Container maxWidth="lg">
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered="True">
                            <Tab label="About" {...a11yProps(0)} />
                            <Tab label="Skill" {...a11yProps(1)} />
                            <Tab label="Career" {...a11yProps(2)} />
                            <Tab label="Contact" {...a11yProps(3)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <About />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Skill />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Career />
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <Contact />
                    </TabPanel>
                </Box>
            </Container>
        </main>
    );
}



