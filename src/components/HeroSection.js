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
        width: '100%',
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
        width: '100%',
        padding: '2rem',
        '@media (max-width: 999px)':{
          paddingTop: 0,
        },
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'middle',
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
        width: '100%',
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
        file(name: { eq: "waves" }, extension: { eq: "jpg" }) {
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
  height: '100vh',
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'middle',
  flexWrap: 'wrap',
  zIndex: -1,
  position: 'fixed',
  filter: 'brightness(50%)'


}}>

        <div className={classes.headerTextHidden}>
        <h1 style={{fontFamily:'Scriptina'}}>The Art of Diving</h1></div>

        <div className={classes.descriptionHidden}>
        <div style={{maxWidth:"700px", alignSelf:"center"}}>
        <h2 style={{marginTop:0}}>F I F T Y 5 6 S I X</h2>

        <p>NEW YEAR NEW US!

Thank you for visiting FIFTY56SIX. After being open for nearly 56 weeks, and getting our shop looking as amazing as it does, we have finally found time to make sure our webpage reflects that. 
</p><p>
So we are currently getting #Team56SVD (Silicone Valley Department) to update, tweek, scroll and click *Insert any other computer jargon you may know here* 
</p><p>
If you have any queries relating to FIFTY56SIX, To Diving, OR to Koh Tao and Thailand, please email us at 
</p><p>
INFO@fiftysixdive.com 
</p><p>
And we shall be happy to answer any questions you might have. 
</p><p>
Thank you, and let us hope 2021 is slightly better than last year!
</p><p>
Look forward to hearing from you soon. 
</p><p>
Love Rich & The 56 Team</p>
        <Button color='secondary' variant='contained' size='large' style={{maxWidth:'100px', marginLeft:'auto', marginRight: 'auto'}}>Button</Button>
        </div></div>
        </BackgroundImage>

        <div style={{minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'middle',
        flexWrap: 'wrap',}}>
        <div className={classes.headerText}>
      
        <h1 style={{fontFamily:'Scriptina'}}>The Art of Diving</h1></div>

        <div className={classes.description}>
        <div style={{maxWidth:"700px", alignSelf:"center"}}>
        <h2 style={{marginTop:0, fontSize:"30px"}}>F I F T Y <span style={{color:'orange'}}>5 6</span> S I X</h2>

        <p>NEW YEAR NEW US!</p><p>

Thank you for visiting FIFTY56SIX. </p><p>After being open for nearly 56 weeks, and getting our shop looking as amazing as it does, we have finally found time to make sure our webpage reflects that. 
</p><p>
So we are currently getting #Team56SVD (Silicone Valley Department) to update, tweek, scroll and click *Insert any other computer jargon you may know here* 
</p><p>
If you have any queries relating to FIFTY56SIX, To Diving, OR to Koh Tao and Thailand, please email us at 
</p><p>
INFO@fiftysixdive.com 
</p><p>
And we shall be happy to answer any questions you might have. 
</p><p>
Thank you, and let us hope 2021 is slightly better than last year!
</p><p>
Look forward to hearing from you soon. 
</p><p>
Love Rich & The 56 Team<br></br><br></br><br></br></p></div>
        </div>
</div>
        
        </>


    )
  }



export default HeroSection
