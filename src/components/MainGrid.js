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

export default function AutoGrid({ left, middle, right }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} columns={{ xs: 8, sm: 30, md: 30 }}>
        {/* Columna izquierda */}
        <Grid item xs={8} sm={8} md={8}>
          <Item>{left}</Item>
        </Grid>
        {/* Columna del medio */}
        <Grid item xs={8} sm={12} md={12}>
          <Item>{middle}</Item>
        </Grid>
        {/* Columna derecha */}
        <Grid item xs={8} sm={10} md={10}>
          <Item>{right}</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
