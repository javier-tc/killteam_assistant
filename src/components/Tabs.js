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
            <Box sx={{ 
                maxWidth: '100%', 
                bgcolor: '#1E1E1E',
                
                }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    allowScrollButtonsMobile
                    centered
                    aria-label="scrollable force tabs example"
                    indicatorColor='primary'
                    textColor='inherit'
                    sx={{
                        color: '#C3510A',
                    }}
                >
                    {array.map((item, index) => (
                        <Tab label={Object.keys(item)[0]} value={index.toString()} key={index} />
                    ))}
                </Tabs>
            
            {array.map((item, index) => (
                <TabPanel value={index.toString()} key={index}>{Object.values(item)[0]}</TabPanel>
            ))}
            </Box>

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
            <Box sx={{ maxWidth: '100%', bgcolor: '#1E1E1E' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant='scrollable'
                    scrollButtons
                    allowScrollButtonsMobile
                    aria-label="scrollable force tabs example"
                    indicatorColor='secondary'
                    textColor='inherit'
                    sx={{
                        color: '#C3510A',
                    }}
                >
                    {array.map((item, index) => (
                        <Tab label={Object.keys(item)[0] + ' [' + Object.values(item)[0].cost + ']'} value={index.toString()} key={index} />
                    ))}
                </Tabs>
            
            {array.map((item, index) => (
                <TabPanel value={index.toString()} key={index}>{Object.values(item)[0].description}</TabPanel>
            ))}
            </Box>
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

function allyProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function VerticalTabs({ array }) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <TabContext value={value}>
            <Box
                sx={{
                    flexGrow: 1,
                    bgcolor: '#1E1E1E',
                    display: 'flex',
                    minHeight: 300,
                    height: 'auto',
                    maxHeight: 700,
                }}
            >
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    indicatorColor=''
                    textColor='inherit'
                    sx={{
                        color: '#C3510A',
                        borderRight: 1,
                        borderColor: '#C3510A',
                    }}
                >
                    {array.map((item, index) => (
                        <Tab
                            label={Object.keys(item)[0]}
                            {...allyProps(index)}
                            sx={{
                                textTransform: 'none'
                            }}
                        />
                    ))}
                </Tabs>
                {array.map((item, index) => (
                    <TabPanel
                        value={index}
                        key={index}
                        sx={{
                            p: 3,
                            width: 500,
                            textAlign: 'justify',
                            overflowX: 'hidden',
                            overflowY: 'scroll'
                        }}
                    >
                        {
                            Object.values(item)[0].description
                        }
                        {
                            Object.values(item)[0].image !== ''
                                ?
                                <img 
                                    style={{ 
                                        maxWidth: 290
                                         }} 
                                    src={Object.values(item)[0].image} 
                                    alt={Object.keys(item)[0]} />
                                :
                                null
                        }
                        {
                            Object.values(item)[0].extra.length > 0
                                ?
                                <ul>
                                    {
                                        Object.values(item)[0].extra.map((extra, index) => (
                                            <li key={index}>{extra}</li>
                                        ))
                                    }
                                </ul>
                                :
                                null
                        }
                    </TabPanel>
                ))}
            </Box>
        </TabContext>
    );
}
export { AbilitiesTabs, PloysTabs, VerticalTabs };
