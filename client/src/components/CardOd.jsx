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
Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis veniam vel sapiente velit rem distinctio in maxime numquam ad, expedita dolorem aut ducimus, ullam error.</Typography>

      </CardContent>
      <CardActions>
        <a style={{textDecoration:'none' , color:'white'}} href='https://www.linkedin.com/in/odaisheikh/'>Contact</a>
        <a style={{textDecoration:'none' , color:'white'}} href= 'https://github.com/odaisheikh'>Github</a>
      </CardActions>
    </Card>


  );
}
