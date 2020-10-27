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
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ClassroomImage from '../components/ClassroomImage'
import SunriseImage from '../components/SunriseImage'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const $openWaterImage = <ClassroomImage />
const $sunriseImage = <SunriseImage />

const tutorialSteps = [
  {
    label: 'Discover Scuba',
    image: $openWaterImage,
    description: "Open Water Course.Open Water Course.Open Water Course.Open Water Course.Open Water Course.Open Water Course.Open Water Course.Open Water Course."
  },
  {
    label: 'Open Water',
    image: $openWaterImage,
    description: "Open Water Course.Open Water Course.Open Water Course.Open Water Course.Open Water Course.Open Water Course.Open Water Course.Open Water Course."
  },
  {
    label: 'PADI Advanced',
    image: $openWaterImage,
    description: "Open Water Course.Open Water Course.Open Water Course.Open Water Course.Open Water Course.Open Water Course.Open Water Course.Open Water Course."
  },

];

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,

  },
  background: {
    backgroundColor: '#F5F5F5',
    paddingTop: '2rem',
    paddingRight: '1.5rem',
    paddingLeft: '1.5rem',
    paddingBottom: '2rem',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  media: {
    height: 255,
    display: 'block',
    maxWidth: 400,
    width: '100%',

    overflow: 'hidden',
  },
}));

function SwipeableTextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStepChange = step => {
    setActiveStep(step);
  };

  return (
    <div className={classes.background}>
    <div className={classes.root}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Card className={classes.root} variant="outlined">
                <CardActionArea>

                {step.image}

                  <CardContent>
                    <h4>
                      {step.label}
                    </h4>
                    <Typography variant="body2" color="textSecondary" component="p">
                    {step.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="large" color="secondary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            ) : null}
          </div>



        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        style={{paddingTop:'1rem', backgroundColor:'transparent', marginTop:'1rem'}}
        position="static"
        variant="dots"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          </Button>
        }
      />
    </div>
    </div>
  );
}

export default SwipeableTextMobileStepper;
