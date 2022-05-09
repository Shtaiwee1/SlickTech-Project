import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom'
import image from '../images/mohammad.jpg';



export default function MediaCard () {
  
    
  return (
    <Card style={{backgroundColor:'#852EB8' }} sx={{ maxWidth: 300 }}>
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
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa fugit corporis vitae tempore neque delectus similique, qui et ratione. Illum distinctio nesciunt suscipit vel fugiat.        </Typography>
      </CardContent>
      <CardActions>
        <a style={{textDecoration:'none' , color:'white'}} href='https://www.linkedin.com/in/mohammad-omair-665076142/'>Contact</a>
        <a style={{textDecoration:'none' , color:'white'}} href= 'https://github.com/Shtaiwee1'>Github</a>

      </CardActions>
    </Card>


  );
}
