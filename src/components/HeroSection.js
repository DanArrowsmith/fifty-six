import React from "react"
import Img from "gatsby-image"
import HeroImage from "../components/HeroImage"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import BackgroundImage from 'gatsby-background-image'
import { graphql, useStaticQuery } from 'gatsby'






  const HeroSection = () => {

    const useStyles = makeStyles(theme => ({



      headerText:{
        color: '#fff',
        textShadow: '2px 2px 4px #000000',
        maxWidth: '500px',
        padding: '2rem',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',

        marginTop: '56px',
      },

      description:{
        color: '#fff',
        textShadow: '2px 2px 4px #000000',
        maxWidth: '500px',
        padding: '2rem',
        '@media (max-width: 999px)':{
          paddingTop: 0,
        },
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      },
      headerTextHidden:{
        color: '#fff',
        maxWidth: '500px',
        padding: '2rem',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        opacity: 0,
        marginTop: '56px',
      },

      descriptionHidden:{
        color: '#fff',
        maxWidth: '500px',
        padding: '2rem',
        '@media (max-width: 999px)':{
          paddingTop: 0,
        },
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        opacity:0,
      },

      }));

    const data = useStaticQuery(graphql`
      query {
        file(name: { eq: "anemone-fish" }, extension: { eq: "jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1400
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)


      const classes = useStyles();

    return (
        <>
        <BackgroundImage fluid={data.file.childImageSharp.fluid} alt="Anemone Fish"
        style={{
  // Defaults are overwrite-able by setting one or each of the following:
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '100vh',
  width: '100vw',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'middle',
  flexWrap: 'wrap',
  zIndex: -1,
  position: 'fixed',
  filter: 'brightness(90%)'


}}>

        <div className={classes.headerTextHidden}>
        <h1 style={{fontFamily:'Scriptina'}}>The Art of Diving</h1></div>

        <div className={classes.descriptionHidden}>
        <h2 style={{marginTop:0}}>Koh Tao</h2>

        <p>Come dive with us!Come dive with us!Come dive with us!Come dive with us!Come dive with us!Come dive with us!Come dive with us!Come dive with us!</p>
        <Button color='secondary' variant='contained' size='large' style={{maxWidth:'100px', marginLeft:'auto', marginRight: 'auto'}}>Button</Button>
        </div>
        </BackgroundImage>

        <div style={{minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'middle',
        flexWrap: 'wrap',}}>
        <div className={classes.headerText}>
        <h1 style={{fontFamily:'Scriptina'}}>The Art of Diving</h1></div>

        <div className={classes.description}>
        <h2 style={{marginTop:0}}>Koh Tao</h2>

        <p>Come dive with us!Come dive with us!Come dive with us!Come dive with us!Come dive with us!Come dive with us!Come dive with us!Come dive with us!</p>
        <Button color='secondary' variant='contained' size='large' style={{maxWidth:'100px', marginLeft:'auto', marginRight: 'auto'}}>Button</Button>
        </div>

        </div>
        </>


    )
  }



export default HeroSection
