import React from "react";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';

const servicesparabx = ({ h1, p }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', margin: '1rem 0' }}>
      <Card 
        variant="outlined" 
        sx={{ 
          width: { xs: '100%', sm: 300, md: 400 }, 
          height: 200 
        }}
      >
        <CardContent>
          <Typography 
            gutterBottom 
            sx={{ color: 'text.secondary', fontSize: { xs: 18, sm: 20 } }}
          >
            {h1}
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ fontSize: { xs: 12, sm: 13 } }}
          >
            {p}
            <br />
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default servicesparabx;
