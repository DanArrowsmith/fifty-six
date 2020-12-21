import React from "react"
import Layout from "../components/Layout"
import QuoteSection from "../components/QuoteSection"
import HeroSection from "../components/HeroSection"
import Blurbs from "../components/Blurbs"
import CardCarousel from "../components/CardCarousel"
import Gallery from "../components/Gallery"
import BlogWidget from "../components/BlogWidget"
import Button from '@material-ui/core/Button';

import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  address:{
display: 'flex',
justifyContent: 'center',
alignItems:'center',
flexDirection: 'column',
backgroundColor: '#FFF',
width:'100%',
paddingTop: '1rem',
paddingBottom:'1rem',
  },
}));

export default function Index() {
    const classes = useStyles();

  return (

  <Layout>
  <HeroSection />
  <Blurbs />
  <Gallery />
  <div className={classes.address} style={{backgroundColor:'#FFF', textAlign:'center', marginTop:0, marginBottom:0,}}>
  <h3 style={{paddingTop: '1rem', backgroundColor:'#FFF', textAlign:'center', marginTop:0, marginBottom:0,}}>FIFTY SIX</h3>
  <p style={{paddingBottom: '1rem',backgroundColor:'#FFF', textAlign:'center', marginTop:0, marginBottom:0,}}>Moo1 10/4<br/>
  Sairee Beach,<br/>
  Koh Tao, Surat Thani 85463<br/>
  Thailand<br/>
  Phone: 05656 565656</p>
  <Button color='secondary' variant='contained' size='large' style={{maxWidth:'200px', marginLeft:'auto', marginRight: 'auto'}}>Contact Us</Button>
  <br/>

  </div>

  </Layout>

)
}
