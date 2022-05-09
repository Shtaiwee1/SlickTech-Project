import React from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import '../style/card.css'
import NavBar from '../components/NavBar';
import { clear } from '@testing-library/user-event/dist/clear';
import TextMobileStepper from '../components/TextMobileStepper';
import { useNavigate } from 'react-router-dom';






const Main = () => {
    const navigate = useNavigate();
    return (
        <>
        <div style={{marginBottom:'70px'}}>
        <NavBar />
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
            <TextMobileStepper />
        </div>
        <div style={{margin:'1px',display:'clear'}}>
        <Grid container spacing={2} style={{marginTop:'4px'}}>
            <Grid item xs={3}>
            <Paper>
            <img src="https://images.ctfassets.net/hrltx12pl8hq/2TRIFRwcjrTuNprkTQHVxs/088159eb8e811aaac789c24701d7fdb1/LP_image.jpg?fit=fill&w=632&h=354&fm=webp" 
            alt='ff' className='imgCard' style={{height:'250px'}}></img>
            <Box paddingX={1}>
                <Typography variant="subtitle1" gutterBottom component="div">product name:</Typography>
            </Box>
            <Box padding={1}>
                <Typography variant="subtitle1" gutterBottom component="div">price</Typography>
            </Box>
            <Box padding={1}>
            <Button variant="contained" onClick={() => navigate('/products/:id')}>More Detail</Button>
            </Box>
            </Paper>
            </Grid>
            <Grid item xs={3}>
            <Paper>
            <img src="https://images.ctfassets.net/hrltx12pl8hq/2TRIFRwcjrTuNprkTQHVxs/088159eb8e811aaac789c24701d7fdb1/LP_image.jpg?fit=fill&w=632&h=354&fm=webp" 
            alt='ff' className='imgCard' style={{height:'250px'}}></img>
            <Box paddingX={1}>
                <Typography variant="subtitle1" gutterBottom component="div">product name:</Typography>
            </Box>
            <Box padding={1}>
                <Typography variant="subtitle1" gutterBottom component="div">price</Typography>
            </Box>
            <Box padding={1}>
            <Button variant="contained" onClick={() => navigate('/products/:id')}>More Detail</Button>
            </Box>
            </Paper>
            </Grid>
            <Grid item xs={3}>
            <Paper>
            <img src="https://images.ctfassets.net/hrltx12pl8hq/2TRIFRwcjrTuNprkTQHVxs/088159eb8e811aaac789c24701d7fdb1/LP_image.jpg?fit=fill&w=632&h=354&fm=webp" 
            alt='ff' className='imgCard' style={{height:'250px'}}></img>
            <Box paddingX={1}>
                <Typography variant="subtitle1" gutterBottom component="div">product name:</Typography>
            </Box>
            <Box padding={1}>
                <Typography variant="subtitle1" gutterBottom component="div">price</Typography>
            </Box>
            <Box padding={1}>
            <Button variant="contained" onClick={() => navigate('/products/:id')}>More Detail</Button>
            </Box>
            </Paper>
            </Grid>
            <Grid item xs={3}>
            <Paper>
            <img src="https://images.ctfassets.net/hrltx12pl8hq/2TRIFRwcjrTuNprkTQHVxs/088159eb8e811aaac789c24701d7fdb1/LP_image.jpg?fit=fill&w=632&h=354&fm=webp" 
            alt='ff' className='imgCard' style={{height:'250px'}}></img>
            <Box paddingX={1}>
                <Typography variant="subtitle1" gutterBottom component="div">product name:</Typography>
            </Box>
            <Box padding={1}>
                <Typography variant="subtitle1" gutterBottom component="div">price</Typography>
            </Box>
            <Box padding={1}>
            <Button variant="contained" onClick={() => navigate('/products/:id')}>More Detail</Button>
            </Box>
            </Paper>
            </Grid>
        </Grid>
        </div>
        </>
    )
}

export default Main