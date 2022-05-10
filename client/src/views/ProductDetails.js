import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from '../components/NavBar'
import {Button , Typography , Rating} from '@mui/material';
import ReviewForm from '../views/ReviewForm'
import ReviewList from '../views/ReviewList'
import { io } from "socket.io-client";

    
const Detail = () => {
    const [product, setProduct] = useState({})
    const { productId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [socket , setSocket]=useState(null);
    
    useEffect(
        ()=>{
            const socket= io('http://localhost:5000')
            console.log(socket.on('first-message',(msg)=>{
                console.log(msg)
                
            }))
        },[]
    )
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + productId  , {withCredentials: true} )
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, [productId]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/getProductReviews'  , {productId} , {withCredentials: true} )
            .then(res=>{
                setReviews(res.data);
                
            })
            .catch(err => console.error(err));
    },[productId]);


    const createReview = review => {
        axios.post('http://localhost:8000/api/reviews', review , {withCredentials: true})
            .then(res=>{
                setReviews([...reviews, res.data]);
            })
            .catch(err=>console.log(err));
    }

  

    var value=2
    
    return (
        <>
        <Navbar/>
    
        <div  style={{display:'flex' , justifyContent:'space-between'  , marginTop:'10%'  }}>
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
                <FontAwesomeIcon icon='info' className='fa-2x' /><h2 style={{display:'inline' , padding:'20px'}}> {product.desc}</h2><br/>
                </div>

                <div>
                    <Link to={"/products/" + product._id + "/edit"}>Edit</Link>
                    <Button variant="outlined" color="error" >
                            Delete
                    </Button>
                </div>

                <div style={{display:'flex' , justifyContent:'space-evenly'}}>
                <Button variant="contained">Buy Now</Button>
                <Button variant="contained">Add To Cart</Button>
                </div>   
            </div>
        </div>
       

        
        <ReviewForm onSubmitProp={createReview} initialComment="" initialRating=""/>

            <div style={{marginTop:'10%' , textAlign:'start' , marginLeft:'5%'}}>
            <h2 style={{marginBottom:'2%'}} >User Reviews:</h2>
            
             <ReviewList reviews={reviews}/> 
            </div>
            
        </>
    )
}
    
export default Detail;
