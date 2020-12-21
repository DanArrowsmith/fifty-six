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
 <p> <h1>Divemaster Course</h1>

Do you have a passion for diving? <br></br>
Are you looking to be a better diver? <br></br>
Have you ever thought about becoming a dive professional? Maybe it’s a change in lifestyle or a new career you’re looking for? <br></br>
If so the Divemaster course is for you!
</p><p>
The PADI Divemaster course is the first professional level along the PADI career ladder. Upon completion of this course you will gain a phenomenal amount of new skills, knowledge and confidence that will allow you to guide certified divers, assist instructors in training new divers and prepare you to become an instructor yourself. 
</p><p>
At FiftySix we focus on smaller group sizes and attention to detail. This creates a fun social environment for learning as well as giving you your first experience of the fantastic lifestyle that accompanies a career in diving. <br></br>
Depending on your own schedule you will spend between 6-8 weeks with us while receiving quality training from experienced instructors preparing you to be a confident dive professional. This training opens up many opportunities for you to be able to work anywhere in the world and have the lifestyle you’ve always dreamed about! 
</p><p>

The prerequisites for the dive master course are as follows: 
<ul>
<li>Certified as a PADI Advanced Open Water Diver and PADI Rescue Diver (or equivalent) </li>
<li>18 Years Old</li>
<li>40 Logged Dives </li>
<li>Completed EFR Primary and Secondary Care training within 24 months</li>
<li>Medically Cleared for diving by a physician with in 12 months</li></ul>
</p><p>
(If you have less than the required amount of dives to start the Divemaster Course, do not worry, we will get you up to the right number in no time.)
</p><p>


 

<h2>SCHEDULE </h2>

The average duration for the Divemaster Course is between 6-8 weeks depending on your current certification level. 
</p><p>
“When would I be able to start?”<br></br>
As the Divemaster Course has a very flexible schedule we can cater the program to your individual needs which means you can start any time during the year.
</p><p>
The Divemaster course is not all diving and study - we want to give you a taste of the lifestyle too – exactly what you’ve been dreaming about.
On Koh Tao we are very lucky to have many things to do with your down time, from snorkeling (you can even see black tip reef sharks and turtles), hiking, rock climbing, flying trapeze or just enjoying a chilled day on one of the many beautiful beaches.
</p><p>
So what will you actually be doing with these 6-8 weeks while having the time of your life? <br></br>
The PADI Dive Master course has the longest duration of any program PADI offers. As you can imagine there is lots for you to learn, but here is a brief overview of the course:
<ul>
<li>Theory sessions learning about how to be a dive professional and increasing your general diving knowledge 
</li>
<li>Pool skill circuits leaning how to demonstrate skills at an instructor level
</li>
<li>Review of previous courses to ensure your understanding and skills are up to date with current requirements 
</li>
<li>Swimming tests to show your in water abilities
</li>
<li>Learning how to set up and run a dive trip in a leadership roll 
</li>
<li>How to brief and lead certified divers confidently
</li>
<li>Dive site mapping
</li>
<li>Assisting instructors on many PADI Courses: Open water, Advanced Open Water, Rescue, Discover scuba Diving and PADI ReActivate
</li>
<li>In water and theory workshops so you can gain confidence before doing them for real.
</li>
<li>And lots, lots more!</li></ul>
</p><p>






<h2>DIVEMASTER COURSE COSTS</h2>

At Fifty Six the PADI Divemaster Course costs 30,000 THB. You will also require the PADI materials (crew pack) at a price of 7,000 THB making the total price:
</p><p>
<h3>37,000 THB</h3>
</p><p>
What’s included in the price? 
<ul>
<li>Unlimited fun diving during your training</li>
<li>Free 56 T-Shirt </li>
<li>Access to all dive school facilities </li>
<li>Unlimited water, tea & coffee</li>
<li>Exclusive Fifty six mask strap and T-shirt</li>
<li>A chance to learn from numerous dive professionals  </li>
<li>Real life, hands-on experience</li></ul>
</p><p>
Your Divemaster crew pack includes
<ul>
<li>PADI Divemaster manual</li>
<li>PADI Instructor Manual </li>
<li>Encyclopedia of diving</li>
<li>Divemaster slates</li>
<li>Training logbook</li>
<li>PADI Binder to keep everything together</li></ul>
</p><p>

On completion of your Divemaster course an application fee of $220 AUD will need to be sent to PADI.
</p><p>

So what are you waiting for? <br></br>Come and join the FiftySix family today and let us take you on the journey of a lifetime! 
</p>
  </div>

  </Layout>

)
}
