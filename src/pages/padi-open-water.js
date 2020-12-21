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
    <h1>PADI Open Water</h1>
  <h2>Perfect for - beginners wanting to learn all the basics and become fully fledged open water divers in a fun environment.
  </h2>
<p>
Maybe you've done a DSD and are eager for more, or you just know that you're keen to get straight on with the certification! Our schedule for our Open Water courses is normally spread out over 3 ½ days.

</p><p>
Orientation start day at 4pm. You get to meet your instructor and fellow class mates (note - we only ever allow 4 divers per instructor, so you get plenty of one to one time.) 
</p><p>
You will complete some paperwork and watch the first training DVD to give you a feel for what you'll be up to. This will normally only take 2 hours, and we can then answer any questions you might have.
</p><p>

Day 1
At 8am your instructor explains the basic scuba diving principles - don't worry, we try to make this part fun too. In the afternoon you will take your first breaths underwater and start building up your confidence with simple skills. By the end of the day, you’ll have mastered the basics.
</p><p>
Day 2
In the morning, we will continue with theory to ensure that by your 2nd afternoon of diving, you’ll be confident in learning some new skills. 
</p><p>
Day 3
The big day! It will be an early start on your last morning - at 7:45am you’ll head out for your last 2 open water dives, these will be to a max depth of 18mtrs, 6 metro deeper than you’ve gone before! Once you return from the dives, you will complete the last of the theory with a final exam, which you’ll have finished by 13:30pm. That afternoon, we always like to have a little team celebration to congratulate you on becoming a certified open water diver.
</p><p>
*We will always adapt the pace of the class to meet individual needs. Sometimes people need more time to get comfortable. Please also note that the schedule may be subject to change due to unavoidable environmental and/or weather factors.
</p><p>
Loved your open water course, but want to take it even further? Learn more about enrolling on an advanced open water course here (link)
</p>
<h3>11000 THB</h3>

  </div>

  </Layout>

)
}
