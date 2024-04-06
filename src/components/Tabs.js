import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import TabContext from '@material-ui/lab/TabContext';
import TabPanel from '@material-ui/lab/TabPanel';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function ScrollableTabsButtonForce({array}) {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <TabContext value={value}>
        {Object.values(array).map((key) => (
            console.log(Object.keys(key))
        ))}
            <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                    aria-label="scrollable force tabs example"
                >
                    <Tab label="Item One" value={"1"}/>
                    <Tab label="Item Two" />
                    <Tab label="Item Three" />
                    <Tab label="Item Four" />
                    <Tab label="Item Five" />
                    <Tab label="Item Six" />
                    <Tab label="Item Seven" />
                </Tabs>
            </Box>
            <TabPanel value="1">Item One</TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
        </TabContext>

    );
}

export { ScrollableTabsButtonForce };