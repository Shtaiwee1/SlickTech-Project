import React , { useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Button } from '@mui/material';

const ReviewForm = (props) => {
    const { onSubmitProp} = props;
    const [rating, setRating] = useState("");
    const [comment, setComment] = useState("");


    const handleChange = (event) => {
        setRating(event.target.value);
      };
    
    
        const onSubmitHandler = e => {
            //prevent default behavior of the submit
            e.preventDefault();
            //make a post request to create a new product
            onSubmitProp({comment , rating });
            setComment("")
            setRating("")
        }

  return (
    <div style={{textAlign:'start' , marginLeft:'5%' , marginTop:'5%'}}>
            <h2>
            Add a review:
            </h2>
            <form onSubmit={onSubmitHandler}>
                <textarea cols="80" rows="9" onChange={(e)=>setComment(e.target.value)} value={comment}/><br/>
                <Box sx={{ minWidth: 120  }}>
                    <FormControl style={{width:'12%' , marginTop:'2%'}} >
                        <InputLabel id="demo-simple-select-label">Rating</InputLabel>
                        <Select
                        style={{height:'45px'}}
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
                    <Button style={{marginLeft:'360px' , marginTop:'2%'}}  variant="contained" color='warning' type='submit'>Sumbit</Button>
                </Box>
                
                
            </form>

            </div>
  )
}

export default ReviewForm