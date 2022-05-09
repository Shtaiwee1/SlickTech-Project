import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from '../components/NavBar'
import {Button , Typography , Grid , Rating} from '@mui/material';
import {motion} from 'framer-motion'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

    
const Detail = (props) => {
    const { removeFromDom } = props;
    const [product, setProduct] = useState({})
    const { id } = useParams();
    const navigate = useNavigate();
    const [rating, setRating] = useState('');
    const [review, setReview] = useState('');

  const handleChange = (event) => {
    setRating(event.target.value);
  };
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' +id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => 
                removeFromDom(productId),navigate("/products/")
                
            )
            .catch(err => console.error(err));
    }

    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new product
        onSubmitProp({title , price , description});
    }

    var value=2
    
    return (
        <>
        <Navbar/>
        <div style={{display:'flex' , justifyContent:'space-between'  , marginTop:'10%'  }}>
            <div style={{backgroundColor:'grey' , width:'30%' }}>
                <p>place holder for image</p>
            </div>
            <div style={{backgroundColor:'grey', width:'60%' , height:'30rem' , display:'flex' , flexDirection:"column" , justifyContent:'space-evenly' }} >
                <div>
                <FontAwesomeIcon icon="header" className='fa-2x' /><h1 style={{display:'inline' , padding:'20px' , marginTop:'20px'}}> {product.title}</h1><br/>
                </div>

                <div>
                    <div style={{display:'flex' , justifyContent:'center' , alignItems:'center'}}>
                <FontAwesomeIcon icon="star" className='fa-2x' /><h2 style={{display:'inline' , padding:'20px' , marginTop:'20px'}}> 
                <Typography component="legend">Rating:</Typography>
                    </h2>
                    <Rating name="read-only" value={value} readOnly />
                    </div>
                
                </div>

                <div>
                <FontAwesomeIcon icon='money-bill' className='fa-2x' /><h2 style={{display:'inline' , padding:'20px'}}> {product.price} $</h2><br/>
                </div>

                <div>
                <FontAwesomeIcon icon='info' className='fa-2x' /><h2 style={{display:'inline' , padding:'20px'}}> {product.description}</h2><br/>
                </div>

                <div>
                    <Link to={"/products/" + product._id + "/edit"}>Edit</Link>
                    <Button variant="outlined" color="error" onClick={(e)=>{deleteProduct(product._id)}}>
                            Delete
                    </Button>
                </div>

                <div style={{display:'flex' , justifyContent:'space-evenly'}}>
                <Button variant="contained">Buy Now</Button>
                <Button variant="contained">Add To Cart</Button>
                </div>   
            </div>
        </div>

        
        <div style={{textAlign:'start' , marginLeft:'5%' , marginTop:'5%'}}>
            <h2>
            Add a review:
            </h2>
            <form onSubmit={onSubmitHandler}>
                <textarea cols="80" rows="9" onChange={(e)=>setReview(e.target.value)} value={review}/><br/>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl style={{width:'10%'}} >
                        <InputLabel id="demo-simple-select-label">Rating</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={rating}
                        label="Rating"
                        onChange={handleChange}
                        >
                        <MenuItem value={1}>One</MenuItem>
                        <MenuItem value={2}>Two</MenuItem>
                        <MenuItem value={3}>Three</MenuItem>
                        <MenuItem value={4}>Four</MenuItem>
                        <MenuItem value={5}>Five</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                
                <Button  variant="contained" color='warning' type='submit'>Sumbit</Button>
            </form>

            </div>

            <div style={{marginTop:'10%' , textAlign:'start' , marginLeft:'5%'}}>
            <h2 >User Reviews:</h2>
            <h4>Rating:</h4>
            <p>Review:</p>
            </div>
            
        </>
    )
}
    
export default Detail;
