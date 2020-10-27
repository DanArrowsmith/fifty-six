import React from "react"
import Img from "gatsby-image"
import HeroImage from "../components/HeroImage"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import BackgroundImage from 'gatsby-background-image'
import { graphql, useStaticQuery } from 'gatsby'






  const QuoteSection = () => {

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

        marginTop: 0,
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
        marginTop: 0,
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
        file(name: { eq: "love-diving" }, extension: { eq: "jpg" }) {
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
        <BackgroundImage fluid={data.file.childImageSharp.fluid} alt="Love Diving"

        style={{
  // Defaults are overwrite-able by setting one or each of the following:
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '50vh',
  width: '100vw',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'middle',
  flexWrap: 'wrap',
}}>

        <div className={classes.headerText} style={{color: '#FFF !important'}}>
        <h3 style={{marginBottom:0,marginTop:0}}>A lot of people attack the sea. We make love to it!</h3></div>

        <div className={classes.description}>
        <h2 style={{fontFamily:'Scriptina', textTransform:'none',marginTop:0}}>-Team56</h2>


        </div>
        </BackgroundImage>

        </>


    )
  }



export default QuoteSection
