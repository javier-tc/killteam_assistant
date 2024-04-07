import * as React from 'react';
// import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

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

export { TroopButton };