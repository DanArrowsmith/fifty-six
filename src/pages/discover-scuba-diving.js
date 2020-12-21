import React from "react"
import Layout from "../components/Layout"
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import Styles from "../components/PageStyles"
import { makeStyles } from '@material-ui/core/styles';



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
        <h1>Discover Scuba Diving in Koh Tao</h1>
        <Img fluid={data.image1.childImageSharp.fluid} />
        <h2>Perfect for – first timers, holidayers who might be short on time or those feeling a bit nervous!</h2>
        <p>Maybe you’ve always wanted to try it, but you’re short on time, are unsure about doing a full certification course or are a bit nervous. 
            Why not try a Discover Scuba Diving day with us?</p>
        <p>This 1-day experience will give you a taste of what wonders lie beneath the placid tropical waters that surround Koh Tao.</p>
        <p>In the afternoon we’ll take you to one of the beautiful sheltered bays around Koh Tao. Perhaps it will be Mango bay or Aow Leuk. 
            Wherever you go we can guarantee beautiful clear waters and an abundance of coral and reef fishes.</p>
        <p>Your instructor will guide you through a few simple skills, and then guide you on an open water dive.</p>
        <Img fluid={data.image2.childImageSharp.fluid} />
        <p>As an added bonus, this experience also allows you to dive again under professional guidance for 1 month, 
            so you can dive again during your vacation, or complete an optional 2nd dive on the same trip for a small additional fee. 
            If what you see and learn excites and intrigues you, why not enroll in a certification course? You don’t lose anything; in 
            fact you can credit your Discover Scuba Diving experience and put it towards either Open Water Diver programs without losing 
            any of your past in-water time.</p>
        <h3>10000 THB</h3>
  </div>

  </Layout>

)
}
