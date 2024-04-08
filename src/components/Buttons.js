import Button from '@mui/material/Button';
import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


function TroopButton({ increase }) {
  return (
    <>
      <Button
        onClick={increase}
        color="success"
        variant='contained'
        size='small'
        sx={{ maxWidth: '20px', maxHeight: '20px', minWidth: '20px', minHeight: '20px' }}
      >
        +
      </Button>
    </>
  );
}



function FloatingActionButton({ onClick }) {
  return (
    <Box sx={{ '& > :not(style)': { m: 0 } }}>
      <Fab color="error" aria-label="add" onClick={onClick} size='small' 
      sx={{ maxWidth: '20px', maxHeight: '20px', minWidth: '20px', minHeight: '20px' }}>
        <HighlightOffIcon />
      </Fab>
    </Box>
  );
}


export { TroopButton, FloatingActionButton };