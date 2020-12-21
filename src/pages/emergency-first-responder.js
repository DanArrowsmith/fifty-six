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
      <h1>Emergency First Responder</h1>
      <p>
  Learning how to rescue people goes hand in hand with basic first aid; one of the requirements to become a rescue diver is having a valid first aid certificate with in the last 24months.  As many people do not posses this, at Fifty Six we teach you and Emergency First Responder (EFR) course that covers all the necessary skills to be an effective first responder in the event of an emergency situation occurring.
</p><p>
<h2>What’s Included?</h2>
<ul>
<li>EFR Manual</li>
<li>EFR Primary and Secondary care Certification Card</li>
<li>FREE pick up from Pier</li>
<li>Amazing dive shop location</li>
<li>Free WIFI at the dive centre</li>
<li>Complementary Tea, Coffee and Water </li>
</ul>
<h2>
What you will learn</h2>
</p><p>
The EFR course is broken down in to two main sections, Primary Care and Secondary Care.  To prepare you for both sections there is self study from the EFR manual followed by an informative video.  Once both of those have been completed its on to the practical sessions with your instructor.
</p><p>
The Primary care portion of the course looks at how to respond more life threating situations that may occur, skills learnt will include.
</p><p>
  <ul>
<li>How to asses a scene for potential dangers</li>
<li>Barrier use (Gloves, CRP masks)</li>
<li>Primary assessment of patients</li>
<li>CPR (Cardiopulmonary Resuscitation)</li>
<li>Serious Bleeding </li>
<li>Shock management </li>
<li>Spinal injury management</li>
<li>Choking with conscious and unconscious patients</li>
</ul><p>
During the Secondary care section we now focus on less life-threating situations, this can be described as basic first aid for dealing illness and injuries.  Skills learnt in this part include.
</p><ul>
<li>Injury assessment (how to identify what injuries have occurred)</li>
<li>Illness assessment (what has caused to patient to be unwell)</li>
<li>Bandaging for sprained joins</li>
<li>Splinting Dislocation and fractures</li>
<li>Bandaging for non-serious bleeding. </li>
</ul>
<h2>Schedule</h2>
</p><p>
EFR is a one-day course begging at 9:00am.  Usually this is taught the day before the rescue course but we can be totally flexible with schedule depending on your personal requirements.  
</p><p>
A rough idea of times can be found below obviously these times can vary depending on group size and speed of learning.
</p><p>
<ul>
<li>9:00am Meet instructor orientation and Video </li>

<li>11:00am Review self-study knowledge development</li>

<li>12:00pm Lunch</li>

<li>13:00pm Practical workshops followed by final exam</li>
</ul>
</p>
<h2>Price</h2>

<h3>4000 THB</h3>
  </div>

  </Layout>

)
}
