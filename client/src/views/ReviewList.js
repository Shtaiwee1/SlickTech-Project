import React from 'react';
import { Rating} from '@mui/material';

const ReviewList = (props) => {
 

    return (
        <div>
            {props.reviews.map((review, idx) => {
                return (
                    <div key={idx} style={{marginTop:'3%'}}>
                        <h5 style={{display:'flex' , alignItems:'center'}}>Rating:<Rating style={{marginLeft:'0.5%'}} name="read-only" value={review.rating} readOnly /></h5> 
                        <p>{review.comment}</p>
                        
                        
                    </div>
                )
            })}
        </div>
    );
}
    
export default ReviewList;
