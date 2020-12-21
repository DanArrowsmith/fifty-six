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
    <h1>PADI Advanced Open Water</h1>
    <p>Perfect for - certified open water divers looking for an even bigger challenge!
</p><p>
Now that you’ve done your open water course, you've learnt all the basic theory, so we can structure the advanced course in a way that ensures you get more time exploring in the water. Perhaps you would like a little more freedom to dive DEEPER , or you would like to develop your NAVIGATION skills, enabling you to surface close to the boat at the end of the dive. Or maybe you want the opportunity to do a NIGHT DIVE? The Advanced Open Water Diver certification can help you achieve all this and more!

</p><p>
5 dives are scheduled over 2 days and are designed to help you explore new aspects of diving, in a fun and relaxed way. You’ll have a little more freedom, but your instructor will still be on hand to help out wherever necessary.
</p><p>
The deep dive helps you to understand some of the advantages and disadvantages of deeper diving, such as seeing different forms of marine life, or experiencing nitrogen narcosis for the first time (go on, ask us about it!)
</p><p>
The navigation dive helps you master compass use, and introduces you to the techniques of distance estimation and natural navigation, allowing you to learn a mental picture of your site and return to the boat successfully without guidance.
</p><p>    


After these 2, there’s then long list of other possible niche dives that you can choose from. Here are the most popular choices.</p>
<p>
<ul>
<li>EanX Dive - discover that there is more than just ‘air’ that you can breathe under water.</li>
<li>Night Dive - explore after dark to see the barracudas feeding or stingrays roaming around White Rock.</li>
<li>Computer Dive - learn more about how we use computer diving technology, and try it out for yourself.</li>
<li>Naturalist dive - learn more about the marine life around the island</li>
<li>Wreck Dive - dive in and around an ex navy vessel, the HTMS Sattakut which lies between 20 and 29 mtrs down.</li>
<li>Peak performance buoyancy dive - perfect your skills and learn to maintain your balance underwater!</li>
<li>Photography dive - hang motionless to get the perfect shot of the huge grouper fish at Chumphon Pinnacle.</li>
</ul>
</p>
<p>
* Please note - some of the dives listed above use additional equipment which does entail a small additional rental fee.
</p><p>
If you don't have the time to complete the whole course don't worry; you can choose to do any of the dives individually and get credit towards your Advanced Rating.
</p>
<h3>10000 THB</h3>
  </div>

  </Layout>

)
}
