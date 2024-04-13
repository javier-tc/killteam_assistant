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
                sx={{
                    maxWidth: 700,
                    width: '100%',
                    '@media (max-width: 400px)': {
                        maxWidth: '100%'
                    }
                }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon color='warning'/>}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    sx={{
                        border: 1,
                        borderRadius: 0,
                        color: '#fff',
                        borderColor: '#C3510A',
                        backgroundColor: '#1E1E1E',
                        paddingHorizontal: 1,
                    }}
                >
                    <Typography sx={{ fontWeight: 'bold' }}>{name}</Typography>
                </AccordionSummary>
                <AccordionDetails
                    sx={{
                        border: 0,
                        borderRadius: 0,
                        borderColor: '#C3510A',
                        color: '#fff',
                        backgroundColor: '#1E1E1E',
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
                sx={{
                    maxWidth: 600,
                    width: '100%',
                    '@media (max-width: 400px)': {
                        maxWidth: '100%'
                    }
                }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon color='warning'/>}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    sx={{
                        color: '#C3510A',
                        borderColor: '#C3510A',
                        border: 1,
                        backgroundColor: '#1E1E1E',
                    }}
                >
                    <Typography sx={{ fontWeight: 'bold' }}>{name}</Typography>
                </AccordionSummary>
                <AccordionDetails
                    sx={{ 
                        borderColor: '#C3510A', 
                        color: '#fff', 
                        backgroundColor: '#1E1E1E',
                        width: 'auto',
                        marginLeft: '0',
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

export { AccordionExpandDefault, SimpleAccordionExpand };
