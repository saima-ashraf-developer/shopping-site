import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import {connect} from 'react-redux';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);



const tutorialSteps = [
  {
    label: 'Braslate',
    imgPath:
      'https://www.jsengineering.org/wp-content/uploads/2016/07/jewellery-design-2.jpg',
  },
  {
    label: 'Necklace',
    imgPath:
      'https://the-maharani-diaries-zxpo8io6akeffozy.netdna-ssl.com/media/2015/11/20032250/Bridal-Jewellery-Trends-for-the-Modern-Indian-Bride-Surya-Gold-3-The-Maharani-Diaries-1030x736.jpg',
  },
  {
    label: 'Shoes for baby girls',
    imgPath:
      'https://i.ebayimg.com/images/g/j9kAAOSwznZba-6P/s-l300.jpg',
  },
  {
    label: 'Sandles for babyies',
    imgPath:
      'https://www.dhresource.com/0x0/f2/albu/g9/M00/32/91/rBVaVVzdZyCAVKHBAAPCJr8QE1k504.jpg/children-s-infant-kids-fashion-crochet-sandals.jpg',
  },
  {
    label: 'Bags for Ladies',
    imgPath:
      'https://ae01.alicdn.com/kf/HLB1iyNIaZrrK1Rjy1zeq6xalFXab/Flower-Shoulder-Bags-Children-PU-Leather-Messenger-Bag-Girls-Crossbody-Bag-Kids-Small-Round-Satchel-Handbags.jpg_Q90.jpg_.webp',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 70,
    backgroundColor: '#ffcc80',
    borderRadius: 10,
    justifyContent: 'center',

  },
  img: {
    height: 350,
    maxWidth: 800,
    overflow: 'hidden',
    display: 'block',
    width: '100%',
    borderRadius: 10
  },
}));

const Stepper=(props)=> {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography variant='h5'>{tutorialSteps[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {props.tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
  )}
  const mapStateToProps = (state) => {
 
    return {
      tutorialSteps: state
    }
  }


export default connect(mapStateToProps)(Stepper);