import React from 'react'
import { useStyles } from './useStyles'
import { useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import { HiOutlineLightBulb } from 'react-icons/hi'
import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';
import MobileStepper from '@material-ui/core/MobileStepper';



const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    topic: 'Raise your thermostat by 1°C',
    label: 'A change in 1°C can affect your bill by up to 6%',

  },
  {
    topic: 'Raise your thermostat by 1°C',
    label: 'Bird',

  },
  {
    topic: 'Raise your thermostat by 1°C',
    label: 'Bali, Indonesia',

  },
  {
    topic: 'Raise your thermostat by 1°C',
    label: 'NeONBRAND Digital Marketing, Las Vegas, United States',

  },
  {
    topic: 'Raise your thermostat by 1°C',
    label: 'Goč, Serbia',

  },
];

const Tips = () => {
  const classes = useStyles()

  const theme = useTheme();

  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };
  return (
    <>
      <h3 style={{ color: 'black', marginTop: '15px' }}>Tips & Recommendations</h3>
      <Paper className={classes.paper}>
        {/* <div style={{ width: "100%", height: 150 }}> */}
        <div style={{ width: "100%", display: 'inline-flex', alignItems: 'baseline', marginBottom: '15px' }}>
          <Paper style={{ width: '35px', padding: '5px', borderRadius: '30%', backgroundColor: '#0077ff' }}>
            <HiOutlineLightBulb color='#ffff' fontSize={20} />
          </Paper>

        </div>

        {/* </div> */}
        <div style={{ marginTop: '5px', textAlign: 'left', width: '80%', }}>
          <div>


            <AutoPlaySwipeableViews
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {tutorialSteps.map((step, index) => (
                <div key={step.label}>
                  <strong style={{ width: '100%', margin: 'auto', color: '#0077ff' }}>{step.topic}</strong>
                  <br />
                  <br />
                  {step.label}
                </div>
              ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
              variant="dots"
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              className={classes.root}
              nextButton={false}
              backButton={false}

              style={{ backgroundColor: '#ffff' }}
            />


          </div>



        </div>
      </Paper>

    </>
  )
}

export { Tips }
