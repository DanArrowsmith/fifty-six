import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image';

const useStyles = makeStyles(theme => ({
  title:{
    width: '100%',
    margin: 'auto',
    backgroundColor: '#FFF',
    textAlign: 'center',
    paddingTop: '1rem',
    paddingBottom: '1rem',
  },
  root: {
    maxWidth: 1000,
    flexGrow: 1,
    backgroundColor: '#FFF',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    maxWidth: 400,
    overflow: 'hidden',
    display: 'block',
    width: '100%',
  },
}));

export default function TextMobileStepper() {
  const data = useStaticQuery(graphql`
      fragment fluidImage on File {
          childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
          }
      }
      query {
        image1: file(relativePath: { eq: "images/shop-photos/shop1.jpg" }) {
          ...fluidImage
        }
        image2: file(relativePath: { eq: "images/shop-photos/shop2.jpg" }) {
          ...fluidImage
        }
        image3: file(relativePath: { eq: "images/shop-photos/shop3.jpg" }) {
          ...fluidImage
        }
        image4: file(relativePath: { eq: "images/shop-photos/shop4.jpg" }) {
          ...fluidImage
        }
        image5: file(relativePath: { eq: "images/shop-photos/shop5.jpg" }) {
          ...fluidImage
        }
        image6: file(relativePath: { eq: "images/shop-photos/shop6.jpg" }) {
          ...fluidImage
        }
        image7: file(relativePath: { eq: "images/shop-photos/shop7.jpg" }) {
          ...fluidImage
        }
        image8: file(relativePath: { eq: "images/shop-photos/shop8.jpg" }) {
          ...fluidImage
        }
        image9: file(relativePath: { eq: "images/shop-photos/shop9.jpg" }) {
          ...fluidImage
        }
        image10: file(relativePath: { eq: "images/shop-photos/shop10.jpg" }) {
          ...fluidImage
        }
        image11: file(relativePath: { eq: "images/shop-photos/shop11.jpg" }) {
          ...fluidImage
        }
        image12: file(relativePath: { eq: "images/shop-photos/shop12.jpg" }) {
          ...fluidImage
        }
        image13: file(relativePath: { eq: "images/shop-photos/shop13.jpg" }) {
          ...fluidImage
        }
        image14: file(relativePath: { eq: "images/shop-photos/shop14.jpg" }) {
          ...fluidImage
        }
        image15: file(relativePath: { eq: "images/shop-photos/shop15.jpg" }) {
          ...fluidImage
        }
        image16: file(relativePath: { eq: "images/shop-photos/shop16.jpg" }) {
          ...fluidImage
        }
        image17: file(relativePath: { eq: "images/shop-photos/shop17.jpg" }) {
          ...fluidImage
        }
        image18: file(relativePath: { eq: "images/shop-photos/shop18.jpg" }) {
          ...fluidImage
        }
      }
    `);

  const steps = [
  {
    label: 'Image 1',
    image: <Img fluid={data.image1.childImageSharp.fluid} />,
  },
  {
    label: 'Image 2',
    image: <Img fluid={data.image2.childImageSharp.fluid} />,
  },
  {
    label: 'Image 3',
    image: <Img fluid={data.image3.childImageSharp.fluid} />,
  },
  {
    label: 'Image 4',
    image: <Img fluid={data.image4.childImageSharp.fluid} />,
  },
  {
    label: 'Image 5',
    image: <Img fluid={data.image5.childImageSharp.fluid} />,
  },
  {
    label: 'Image 6',
    image: <Img fluid={data.image6.childImageSharp.fluid} />,
  },
  {
    label: 'Image 7',
    image: <Img fluid={data.image7.childImageSharp.fluid} />,
  },
  {
    label: 'Image 8',
    image: <Img fluid={data.image8.childImageSharp.fluid} />,
  },
  {
    label: 'Image 9',
    image: <Img fluid={data.image9.childImageSharp.fluid} />,
  },
  {
    label: 'Image 10',
    image: <Img fluid={data.image10.childImageSharp.fluid} />,
  },
  {
    label: 'Image 11',
    image: <Img fluid={data.image11.childImageSharp.fluid} />,
  },
  {
    label: 'Image 12',
    image: <Img fluid={data.image12.childImageSharp.fluid} />,
  },
  {
    label: 'Image 13',
    image: <Img fluid={data.image13.childImageSharp.fluid} />,
  },
  {
    label: 'Image 14',
    image: <Img fluid={data.image14.childImageSharp.fluid} />,
  },
  {
    label: 'Image 15',
    image: <Img fluid={data.image15.childImageSharp.fluid} />,
  },
  {
    label: 'Image 16',
    image: <Img fluid={data.image16.childImageSharp.fluid} />,
  },
  {
    label: 'Image 17',
    image: <Img fluid={data.image17.childImageSharp.fluid} />,
  },
  {
    label: 'Image 18',
    image: <Img fluid={data.image18.childImageSharp.fluid} />,
  },

];

  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  return (
    <>
    <div className={classes.title}>
    <h3 className={classes.title}> Our Dive Shop</h3>
    </div>

    <div className={classes.root}>

    {steps[activeStep].image}
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
    </>
  );
}
