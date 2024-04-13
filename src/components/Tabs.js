import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


const basePath = process.env.NODE_ENV === 'production' ? '' : 'killteam_assistant/';


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
          TabIndicatorProps={{
            style: {
              background: '#C3510A',
            }
          }}
        >
          {array.map((item, index) => (
            <Tab label={Object.keys(item)[0]} value={index.toString()} key={index} />
          ))}
        </Tabs>

        {array.map((item, index) => (
          <TabPanel
            value={index.toString()}
            key={index}
            sx={{
              textAlign: 'justify',
            }}
          >
            {Object.values(item)[0].description !== ''
              ?
              <>
                <div style={{ marginBottom: '10px' }}>
                  {Object.values(item)[0].description}
                </div>
                <div>
                  {Object.values(item)[0].effect}
                </div>
              </>
              :
              <>
                {Object.values(item)[0].effect}
              </>
            }
            {Object.values(item)[0].extra.length > 0
              ?
              <div style={{ marginBottom: '10px' }}>
                {Object.values(item)[0].extra.map((extra, index) => (
                  <>
                    {
                      extra.title !== ''
                        ?
                        <h3 style={{ marginBottom: '10px' }}>
                          {extra.title}
                        </h3>
                        :
                        null
                    }
                    {
                      extra.description !== ''
                        ?
                        <div style={{ marginBottom: '10px' }}>
                          {extra.description}
                        </div>
                        :
                        null
                    }
                  </>
                ))}
              </div>
              :
              null
            }
          </TabPanel>
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
          TabIndicatorProps={{
            style: {
              background: '#C3510A',
            }
          }}
        >
          {array.map((item, index) => (
            <Tab label={Object.keys(item)[0] + ' [' + Object.values(item)[0].cost + ']'} value={index.toString()} key={index} />
          ))}
        </Tabs>

        {array.map((item, index) => (
          <TabPanel
            value={index.toString()}
            key={index}
            sx={{
              textAlign: 'justify',
            }}
          >
            {Object.values(item)[0].description}
          </TabPanel>
        ))}
      </Box>
    </TabContext>
  );
}


function allyProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

function VerticalTabs({ array }) {
  const [value, setValue] = React.useState(0);
  const [tabsVisible, setTabsVisible] = React.useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleTabsVisibility = () => {
    setTabsVisible(!tabsVisible);
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
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            left: '0',
            zIndex: '1',
          }}
        >
          <Button
            onClick={toggleTabsVisibility}
            size="small"
            sx={{
              minWidth: '15px',
              minHeight: '20px',
              maxWidth: '15px',
              maxHeight: '20px',
            }}
            style={{
              //background: 'transparent',
              backgroundColor: '#C3510A',
              borderRadius: '5px',
              color: '#1E1E1E',
              marginLeft: tabsVisible ? '75px' : '-20px',
            }}
          >
            {tabsVisible ? <KeyboardArrowLeftIcon /> : <KeyboardArrowRightIcon />}
          </Button>
        </Box>
        {tabsVisible && (
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            indicatorColor=""
            textColor="inherit"
            sx={{
              color: '#C3510A',
              borderRight: 1,
              borderColor: '#C3510A',
              minWidth: 95,
              maxWidth: 95,
              overflowWrap: 'break-word',
              margin: '-10px', // Espacio para el botón
            }}
            TabIndicatorProps={{
              style: {
                background: '#C3510A',
                width: 3,
              },
            }}
          >
            {array.map((item, index) => (
              <Tab
                label={Object.keys(item)[0]}
                key={index}
                {...allyProps(index)}
                sx={{
                  textTransform: 'none',
                }}
              />
            ))}
          </Tabs>
        )}
        {array.map((item, index) => (
          <TabPanel
            value={index}
            key={index}
            sx={{
              p: 3,
              width: 500,
              textAlign: 'justify',
              overflowY: 'auto',
              minWidth: 170,
              scrollbarColor: '#C3510A #1E1E1E',
            }}
          >
            {Object.values(item)[0].description.split('\n').map((description, index) => (
              description.split('[divider]').length > 1 ? (
                <>
                  <hr key={`hr-${index}`} />
                  {description.split('[divider]').map((descriptionPart, index2) => (
                    <div key={index2}>
                      {descriptionPart}
                    </div>
                  ))}
                </>
              ) : (
                <div key={index}>{description}</div>
              )
            ))}


            {Object.values(item)[0].image !== '' ? (
              <img
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  width: 'auto',
                  height: 'auto',
                  overflow: 'auto',
                  // display: 'block',
                  // margin: 'auto',
                }}
                src={basePath + Object.values(item)[0].image}
                alt={Object.keys(item)[0]}
              />
            ) : null}
            {Object.values(item)[0].extra.length > 0 ? (
              Object.values(item)[0].extra.length === 1 ? (
                <>
                  {
                    Object.values(item)[0].extra[0].title && Object.values(item)[0].extra[0].description
                      ?
                      (
                        <>
                          {Object.values(item)[0].extra[0].title === '' ? null : <h3>{Object.values(item)[0].extra[0].title}</h3>}
                          <div>{Object.values(item)[0].extra[0].description}</div>
                        </>
                      )
                      :
                      (
                        <div>{Object.values(item)[0].extra[0]}</div>
                      )
                  }
                </>
              ) : (
                <ul>
                  {Object.values(item)[0].extra.map((extra, index) => (
                    <li key={index}>{extra}</li>
                  ))}
                </ul>
              )
            ) : null}

          </TabPanel>
        ))}
      </Box>
    </TabContext>
  );
}

export { AbilitiesTabs, PloysTabs, VerticalTabs };
