import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import image from '../images/odai.jpg';

export default function MediaCard () {
  
    
  return (
    <Card style={{backgroundColor:"#027C85"}} sx={{ maxWidth: 300 }}>
      <img src={image}
        
        height="240"
        width="300"
        
        alt="Odai Sheikh"
      />
      <CardContent>
        <Typography style={{color:'white'}} gutterBottom variant="h5" component="div">
        Odai Sheikh
        </Typography>
        <Typography style={{color:'white'}} variant="body2" color="text.light">
        Full-Stack developer
A Full-Stack developer who is passionate about programming and figuring out everything related to new technologies and very good at critical thinking and problem solving.Clear understanding of web applications.Willing to contribute to the team to achieve all goals within deadline</Typography>

      </CardContent>
      <CardActions>
        <a style={{textDecoration:'none' , color:'white'}} href='https://www.linkedin.com/in/odaisheikh/'>Contact</a>
        <a style={{textDecoration:'none' , color:'white'}} href= 'https://github.com/odaisheikh'>Github</a>
      </CardActions>
    </Card>


  );
}
