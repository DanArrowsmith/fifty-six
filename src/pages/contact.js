import React from "react"
import Layout from "../components/Layout"
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import Styles from "../components/PageStyles"
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import { Link } from "gatsby"



const useStyles = makeStyles(Styles);

export const query = graphql`
query {
  image1: file(relativePath: { eq: "images/priderock_leo.png" }) {
    childImageSharp {
      fluid(maxWidth:500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  image2: file(relativePath: { eq: "images/seahorse.png" }) {
    childImageSharp {
      fluid(maxWidth:500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`


export default ({ data }) => {
    const classes = useStyles();

  return (

  <Layout>
  <div class={classes.container}>
 <p> <h1>Contact Us</h1>
<h2>We love questions! So feel free to get in touch...</h2>
<div class={classes.contact}>     <Link to="http://m.me/fiftysixdive"><FacebookIcon color='secondary' fontSize='large'/></Link>


          <Link to="mailto:info@fiftysixdive.com"><EmailIcon color='secondary' fontSize='large' /></Link></div>
 </p>
  </div>

  </Layout>

)
}
