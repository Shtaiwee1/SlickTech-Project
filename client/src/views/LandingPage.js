import  React ,{useState,useEffect}  from 'react';
import axios  from 'axios';
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
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/allProduct")
            .then((res) => {
            setProduct(res.data);
            setLoaded(true);
            console.log(res.data);
            })
            .catch((err) => console.log(err));
        }, []);
    return (
        <>
        <div style={{marginBottom:'70px'}}>
        <NavBar />
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
            <TextMobileStepper />
        </div>
        <div style={{margin:'1px',display:'clear',marginTop:'30px'}}>
        <Grid container spacing={3} style={{margin:'4px'}}>
        {loaded && (
                product.map((product, index)=>{
                    return (<Grid key={index} xs={3}  style={{marginTop:'4px'}}>
                        <Grid spacing={3} style={{margin:'7px'}}>
                            <Paper>
                            <img src={require("../images/"+product.image)}
                            alt='ff' className='imgCard' style={{height:'250px'}}></img>
                            <Box paddingX={1}>
                                <Typography variant="subtitle1" gutterBottom component="div">product name: {product.title}</Typography>
                            </Box>
                            <Box padding={1}>
                                <Typography variant="subtitle1" gutterBottom component="div">price:{product.price}</Typography>
                            </Box>
                            <Box padding={1}>
                            <Button variant="contained">More Detail</Button>
                            </Box>
                            </Paper>
                        </Grid>
                    </Grid>)
                })
        )} 
        </Grid>
        </div>
        </>
    )
}

export default Main