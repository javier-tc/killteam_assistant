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

// function TabPanel(props) {
//     const { children, value, index, ...other } = props;
//     return (
//         <div
//             role="tabpanel"
//             hidden={value !== index}
//             id={`simple-tabpanel-${index}`}
//             aria-labelledby={`simple-tab-${index}`}
//             {...other}
//         >
//             {value === index && (
//                 <Box sx={{ p: 3 }}>
//                     <Typography>{children}</Typography>
//                 </Box>
//             )}
//         </div>
//     );
// }

// TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.number.isRequired,
//     value: PropTypes.number.isRequired,
// };

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function VerticalTabs(array) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                <Tab label="Item One" {...a11yProps(0)} />
                {array.map((item, index) => (
                    <Tab label={Object.keys(item)[0]} {...a11yProps(index)} />
                ))}
            </Tabs>
            {array.map((item, index) => (
                <TabPanel value={index} key={index}>{
                    Object.values(item)[0].description
                }</TabPanel>
            ))}
        </Box>
    );
}
export { AbilitiesTabs, PloysTabs, VerticalTabs };
