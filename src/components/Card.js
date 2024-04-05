import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';



export default function BasicCard({ content }) {
  return (
    <Card 
        sx={{ 
            minWidth: 275, 
            width: 'auto',
            minHeight: 800,
            margin: 1,
            bgcolor: '#1E1E1E',
            border: 2,
            borderRadius:0,
            color: '#C3510A',
            }}>
      <CardContent>
        {content}
      </CardContent>
      {/* <CardActions>
      </CardActions> */}
    </Card>
  );
}
