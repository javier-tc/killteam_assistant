import * as React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

function TroopButton({ increase }) {
  return (
    <ButtonGroup
      //disableElevation
      size="small"
      variant="contained"
      aria-label="Small button group"
    >
      <Button onClick={increase} color="success">+</Button>
      {/* <Button onClick={decrease} color="error">-</Button> */}
    </ButtonGroup>
  );
}

export { TroopButton };