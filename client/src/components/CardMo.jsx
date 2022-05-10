import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import image from '../images/mohammad.jpg';



export default function MediaCard () {
  
    
  return (
    <Card style={{backgroundColor:'#027C85' }} sx={{ maxWidth: 300 }}>
      <img src={image}
        
        height="240"
        width="300"
        
        alt="Mohammad Omair"
      />
      <CardContent>
        <Typography style={{color:'white'}} gutterBottom variant="h5" component="div">
          Mohammad Omair
        </Typography>
        <Typography style={{color:'white'}} variant="body2" color="text.secondary">
        Enthusiastic Full-Stack Dev and Engineer, eager to contribute to team success through hard work. Clear understanding of web applications. Motivated to learn, grow and excel in building highly functional useful apps . Knowledgeable of backend and frontend development requirements. Collaborative team player with excellent technical abilities.        </Typography>
      </CardContent>
      <CardActions>
        <a style={{textDecoration:'none' , color:'white'}} href='https://www.linkedin.com/in/mohammad-omair-665076142/'>Contact</a>
        <a style={{textDecoration:'none' , color:'white'}} href= 'https://github.com/Shtaiwee1'>Github</a>
      </CardActions>
    </Card>


  );
}
