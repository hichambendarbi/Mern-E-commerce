import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://ma.jumia.is/cms/1_2020/Week24/Sliders/MA_SX_FR_SummerFashionMen.jpg',
  },
  {
    label: 'Bird',
    imgPath:
      'https://ma.jumia.is/cms/1_2020/Week22/Sliders/MA_W22_SX_XiaomiNote9.png',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://ma.jumia.is/cms/1_2020/Week22/Sliders/_FR/MA_W22_SX_Trendyol-_FR.gif',
  },
  {
    label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
    imgPath:
      'https://ma.jumia.is/cms/1_2020/Week22/Sliders/banniere-712x384.jpg',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://ma.jumia.is/cms/1_2020/Week22/Sliders/Tommy-Hilfiger-712x384.jpg',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://ma.jumia.is/cms/1_2020/Week22/Sliders/MA_W49_SX_DestockageReturns.gif',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://ma.jumia.is/cms/1_2020/Week23/Sliders/MA_W23_SX_Accessoires-06-20-min.png',
  }
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: "45vh",
    display: 'block',
    overflow: 'hidden',
    width: '100%',
    borderRadius: 5,
  },
}));


function Carousel() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep} 
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => ( 
          <div key={step.label} >
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} id="tst"/>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </div>
  );
}

export default Carousel