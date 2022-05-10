import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import image from '../images/sanad.jpg';

export default function MediaCard () {
  
    
  return (
    <Card style={{backgroundColor:"#027C85"}} sx={{ maxWidth: 300 }}>
      <img src={image}
        
        height="240"
        width="300"
        
        alt="Sanad Abu Shama"
      />
      <CardContent>
        <Typography style={{color:'white'}} gutterBottom variant="h5" component="div">
        Sanad Abu Shama
        </Typography>
        <Typography style={{color:'white'}} variant="body2" color="text.secondary">
        A Full-Stack Developer with a Mechanical Engineering degree from Birzeit University aspiring to have a successful career
in the technology industry. Went through a four-month immersive full-stack development boot camp provided by Coding
Dojo and implemented by AXSOS Academy. Highly organized, self-sufficient, and capable of quick adaptation to new skills
and technologies.        </Typography>
      </CardContent>
      <CardActions>
        <a style={{textDecoration:'none' , color:'white'}} href='https://www.linkedin.com/in/sanad-abu-shama/'>Contact</a>
        <a style={{textDecoration:'none' , color:'white'}} href= 'https://github.com/SanadAbuShama'>Github</a>
      </CardActions>
    </Card>


  );
}
