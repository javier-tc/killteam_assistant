import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#363636',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function AutoGrid({left, middle, right}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} columns={30}>
        <Grid item xs = {8}>
          <Item>{left}</Item>
        </Grid>
        <Grid item xs={14}>
          <Item>{middle}</Item>
        </Grid>
        <Grid item xs = {8}>
          <Item>{right}</Item>
        </Grid>
      </Grid>
    </Box>
  );
}