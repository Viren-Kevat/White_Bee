import React from "react";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
const servicesparabx =({h1,p})=>{
    return(
    <Box >
      <Card variant="outlined" sx={{ width: 400, height: 200 }}>  
       <CardContent>
       <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 20 }}>
       {h1}
       </Typography>
        <Typography variant="body2" sx={{fontSize:13}}>
        {p}
        <br />
      </Typography>
    </CardContent>
    </Card>
    </Box>
    )
}
export default servicesparabx;