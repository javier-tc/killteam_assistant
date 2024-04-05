import * as React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

function TroopButton({ increase, decrease }) {
  return (
    <ButtonGroup
      //disableElevation
      size="small"
      color="primary"
      //variant="contained"
      aria-label="Small button group"
    >
      <Button onClick={increase}>+</Button>
      <Button onClick={decrease}>-</Button>
    </ButtonGroup>
  );
}

export { TroopButton };