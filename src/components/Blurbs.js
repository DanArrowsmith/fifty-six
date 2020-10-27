import React from "react"
import Img from "gatsby-image"
import { makeStyles } from '@material-ui/core/styles';
import SaireeBeachImage from "../components/SaireeBeachImage"
import SunriseImage from "../components/SunriseImage"

  const Blurbs = () => {

    const useStyles = makeStyles(theme => ({


      blurbContainer:{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#FFF',
        '@media (min-width:650px)':{
          flexDirection: 'row',
          flexWrap: 'wrap',
        },
      },

      text:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: ' center',
        paddingLeft: '2rem',
        paddingRight: '2rem',
        '@media (min-width:650px)':{
          width:'50vw',
        },
      },

      image:{
        paddingLeft: '2rem',
        paddingRight: '2rem',
        paddingTop: '2rem',
        '@media (min-width:650px)':{
          width:'50vw',
        },
      },

      }));

    const classes = useStyles();

    return (
          <div className={classes.blurbContainer}>
          <div className={classes.image}>
            <SaireeBeachImage styles={{maxWidth:'100vw'}}/>
          </div>
            <div className={classes.text}>
              <h3>Title of Blurb</h3>
              <p>Some Blurb text.Some Blurb text.Some Blurb text.Some Blurb text.
              Some Blurb text.Some Blurb text.Some Blurb text.Some Blurb text.</p>
            </div>
            <div className={classes.image}>
              <SunriseImage className={classes.image} styles={{maxWidth:'100vw'}}/>
            </div>
              <div className={classes.text}>
                <h3>Title of Blurb</h3>
                <p>Some Blurb text.Some Blurb text.Some Blurb text.Some Blurb text.
                Some Blurb text.Some Blurb text.Some Blurb text.Some Blurb text.</p>
              </div>
          </div>


    )
  }

export default Blurbs
