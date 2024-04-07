import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export default function AutoGrid({left, middle, right}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs = {4}>
          <Item>{left}</Item>
        </Grid>
        <Grid item xs={5}>
          <Item>{middle}</Item>
        </Grid>
        <Grid item xs = {3}>
          <Item>{right}</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
