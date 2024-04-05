import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function AccordionExpandDefault({name, details}) {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    sx={{
                        margin: 0,
                        border: 0,
                        borderRadius: 1,
                        color: '#1E1E1E',
                        backgroundColor: '#fff',
                        padding: 2
                    } }
                >
                    <Typography>{name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {details}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export { AccordionExpandDefault };