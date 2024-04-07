import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function AbilitiesTabs({ array }) {
    const [value, setValue] = React.useState('0');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <TabContext value={value}>
            <Box sx={{ maxWidth: '100%', bgcolor: 'background.paper' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    allowScrollButtonsMobile
                    centered
                    aria-label="scrollable force tabs example"
                >
                    {array.map((item, index) => (
                        <Tab label={Object.keys(item)[0]} value={index.toString()} key={index} />
                    ))}
                </Tabs>
            </Box>
            {array.map((item, index) => (
                <TabPanel value={index.toString()} key={index}>{Object.values(item)[0]}</TabPanel>
            ))}

        </TabContext>
    );
}

function PloysTabs({ array }) {
    const [value, setValue] = React.useState('0');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <TabContext value={value}>
            <Box sx={{ maxWidth: '100%', bgcolor: 'background.paper' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant='scrollable'
                    scrollButtons
                    allowScrollButtonsMobile
                    aria-label="scrollable force tabs example"
                >
                    {array.map((item, index) => (
                        <Tab label={Object.keys(item)[0] + ' [' + Object.values(item)[0].cost + ']'} value={index.toString()} key={index} />
                    ))}
                </Tabs>
            </Box>
            {array.map((item, index) => (
                <TabPanel value={index.toString()} key={index}>{Object.values(item)[0].description}</TabPanel>
            ))}
        </TabContext>
    );
}

export { AbilitiesTabs, PloysTabs };
