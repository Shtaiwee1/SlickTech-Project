import  React ,{useState,useEffect}  from 'react';
import axios  from 'axios';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';


export default function TextMobileStepper() {
const theme = useTheme();
const [activeStep, setActiveStep] = React.useState(0);
const [product, setProduct] = useState([]);
const [loaded, setLoaded] = useState(false);
const maxSteps = product.length;
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

const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
};

const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
};

return (
    // <Box sx={{ maxWidth: 600, flexGrow: 1 }}>
    // <Paper
    //     square
    //     elevation={0}
    //     sx={{
    //     display: 'flex',
    //     alignItems: 'center',
    //     height: 50,
    //     pl: 2,
    //     bgcolor: 'background.default',
    //     }}
    // >
    //     <Typography>{steps[activeStep].label}</Typography>
    // </Paper>
    // <Box sx={{ height: 255, maxWidth: 600, width: '100%', p: 2 }}>
    //     {steps[activeStep].description}
    // </Box>
    <>
    {
        loaded && (
    
    <Box sx={{ maxWidth: 600, flexGrow: 1 }}>
    <Paper>
    <img src={ require("../images/" +product[activeStep].image )}
    alt='ff' className='imgCard' style={{height:'300px'}}></img>
    <Box paddingX={1}>
        <Typography variant="subtitle1" gutterBottom component="div">product name:{product[activeStep].title}</Typography>
    </Box>
    <Box padding={1}>
        <Typography variant="subtitle1" gutterBottom component="div">price:{product[activeStep].price}</Typography>
    </Box>
    <Box padding={1}>
    <Button variant="contained">More Detail</Button>
    </Box>
    </Paper>
    <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
        <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
        >
            Next
            {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
            ) : (
            <KeyboardArrowRight />
            )}
        </Button>
        }
        backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
            <KeyboardArrowRight />
            ) : (
            <KeyboardArrowLeft />
            )}
            Back
        </Button>
        }
    />
    </Box>
    )}
    </>
);
}
