import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const steps = [
{
    label: 'Select campaign settings',
    description: `For each ad campaign that you create, you can control how much
            you're willing to spend on clicks and conversions, which networks
            and geographical locations you want your ads to show on, and more.`,
},
{
    label: 'Create an ad group',
    description:
    'An ad group contains one or more ads which target a shared set of keywords.',
},
{
    label: 'Create an ad',
    description: `Try out different ad text to see what brings in the most customers,
            and learn how to enhance your ads using features like ad extensions.
            If you run into any problems with your ads, find out how to tell if
            they're running and how to resolve approval issues.`,
},
];

export default function TextMobileStepper() {
const theme = useTheme();
const [activeStep, setActiveStep] = React.useState(0);
const maxSteps = steps.length;

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
    <Box sx={{ maxWidth: 600, flexGrow: 1 }}>
    <Paper>
    <img src="https://images.ctfassets.net/hrltx12pl8hq/2TRIFRwcjrTuNprkTQHVxs/088159eb8e811aaac789c24701d7fdb1/LP_image.jpg?fit=fill&w=632&h=354&fm=webp" 
    alt='ff' className='imgCard' style={{height:'300px'}}></img>
    <Box paddingX={1}>
        <Typography variant="subtitle1" gutterBottom component="div">product name:{steps[activeStep].description}</Typography>
    </Box>
    <Box padding={1}>
        <Typography variant="subtitle1" gutterBottom component="div">price</Typography>
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
);
}
