import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function AccordionExpandDefault({ name, details }) {
    return (
        <div>
            <Accordion
                sx={{ width: 'auto' }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    sx={{
                        border: 1,
                        borderRadius: 0,
                        color: '#1E1E1E',
                        backgroundColor: '#fff',
                        paddingHorizontal: 1,

                    }}
                >
                    <Typography sx={{ fontWeight: 'bold' }}>{name}</Typography>
                </AccordionSummary>
                <AccordionDetails
                    sx={{
                        border: 1,
                        borderRadius: 0,
                        color: '#1E1E1E',
                        backgroundColor: '#E8E8E8',
                        padding: 3,
                    }}
                >
                    <Typography>
                        {details}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

function SimpleAccordionExpand({ name, details }) {
    return (
        <div>
            <Accordion
                sx={{ width: 'auto' }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography sx={{ fontWeight: 'bold' }}>{name}</Typography>
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

export { AccordionExpandDefault, SimpleAccordionExpand };