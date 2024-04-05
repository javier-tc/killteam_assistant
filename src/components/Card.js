import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';



function BasicCard({ content, minHeight }) {
  return (
    <Card
      sx={{
        minWidth: 275,
        width: 'auto',
        minHeight: minHeight || 800,
        margin: 1,
        bgcolor: '#1E1E1E',
        border: 2,
        borderRadius: 0,
        color: '#C3510A',
      }}>
      <CardContent>
        {content}
      </CardContent>
    </Card>
  );
}

function TroopsCard({content}) {
  return (
    <Card
      sx={{
        minWidth: 275 ,
        width: 'auto',
        margin: 1,
        border: 2,
        borderRadius: 0,
        color: '#C3510A',
        backgroundColor: '#1E1E1E',
      }}>
      <CardContent>
        {content}
      </CardContent>
    </Card>
  )
}


export { BasicCard, TroopsCard }