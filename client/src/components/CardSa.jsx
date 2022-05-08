import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom'
import image from '../images/sanad.jpg';

export default function MediaCard () {
  
    
  return (
    <Card style={{backgroundColor:"#852EB8"}} sx={{ maxWidth: 300 }}>
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
Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, magni qui unde aspernatur quae, minima reprehenderit eligendi doloremque et facilis provident consectetur minus exercitationem ipsum.        </Typography>
      </CardContent>
      <CardActions>
        <a style={{textDecoration:'none' , color:'white'}} href='https://www.linkedin.com/in/sanad-abu-shama/'>Contact</a>
        <a style={{textDecoration:'none' , color:'white'}} href= 'https://github.com/SanadAbuShama'>Github</a>
      </CardActions>
    </Card>


  );
}
