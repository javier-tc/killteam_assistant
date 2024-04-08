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
        sx={{ maxHeight: '25px' }}
      >+</Button>
    </>
  );
}



export default function FloatingActionButton({onClick}) {
  return (
    <Box sx={{ '& > :not(style)': { m: 0 } }}>
      <Fab color="error" aria-label="add" onClick={onClick} size='small'>
        <HighlightOffIcon />
      </Fab>
    </Box>
  );
}

  
export { TroopButton, FloatingActionButton };