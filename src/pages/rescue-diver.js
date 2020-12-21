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
      <h1>Rescue Diver</h1><p>
      When people talk about this course the most commonly used words to describe it are challenging, demanding, rewarding and fun.  The PADI recuse diver course is seen by some as the first professional level of diver training and can be used as a gateway to the PADI Dive master course.  Learning how to react and respond to rescue situations while also becoming more aware of potential problem that can occur will not only increase your skills and knowledge, but will also improve your own abilities and confidence as a diver.
</p><p>
<h2>What’s Included?</h2>
<ul>
<li>PADI Rescue Diver Manual</li>
<li>Rental of all scuba equipment (including dive computer)</li>
<li>PADI Certification</li>
<li>FREE pick up from Pier</li>
<li>Amazing dive shop location</li>
<li>Training dives and scenario practice</li>
<li>Free WIFI at the dive centre</li>
<li>Discounted accommodation options from dorms to private aircon rooms</li>
<li>Tea/coffee/water and fresh pineapple on the boat</li>
</ul>
</p><p>
<h2>What you will learn</h2>

The Rescue diver course is designed to teach you many new and exciting skills in a way that builds confidence through repetition and practice.  You will begin with the course with knowledge development taught via videos and interactive classroom presentations.  Next we take you into shallow water to put the theory into practice, finally we test all your newly learned skills with real life scenarios in open water. 
</p><p>
<h2>Knowledge development</h2>

During your knowledge development we focus on trying to prevent emergencies from happing but also how to deal with them if they do. Topics covered in this part include.
</p><p><ul>
<li>Stress – what causes it and how to remove it.</li>
<li>Identifying divers in distress underwater and at the surface</li>
<li>Rescue situations and correct procedures </li>
<li>Equipment problems – </li>
<li>Injury management and first aid</li>
<li>Missing diver</li>
<li>Emergency action plan</li>
<li>Scene management and incident reports</li></ul>
</p><p>

<h2>Shallow water learning </h2>

The section begins with a review of self-rescue skills, ensuring your comfortable helping yourself in a possible emergency; we then introduce the following exercises, your instructor will give clear concise demonstrations allowing students to practice and master each skill before moving onto the next.
</p><p>
    <ul>
<li>Tired Diver</li>
<li>Panicked Diver</li>
<li>Response from shore boat or dock</li>
<li>Distressed diver underwater</li>
<li>Missing diver</li>
<li>Surfacing unresponsive diver</li>
<li>Unresponsive diver at the surface</li>
<li>Exiting the unresponsive diver</li>
<li>First aid for pressure related injuries & Oxygen administration</li>
<li>Response from shore/boat to unresponsive diver at the surface</li>
</ul>
</p><p>
<h2>Rescue Scenarios</h2>

The final part of the course is to test all your new skills and knowledge with 2 rescue scenarios out in the open water.  Your instructor will make these as realistic as possible, expect them to be challenging but a lot of fun at the same time
</p><p>
Scenario 1 Unresponsive Diver Underwater - Search to locate a missing diver during an accident, Interview victims buddy, organize an effective search and bring unresponsive diver to the surface.
</p><p>
Scenario 2 Unresponsive Diver at the Surface – respond to a unresponsive non breathing diver, evaluate, tow give rescue breaths, remove equipment, exit and provide CPR. 
</p><p>

<h2>Prerequisites</h2>
<ul>
<li>12 years old (12-14 years olds earn a junior rescue diver certification)</li>
<li>PADI (Junior) Adventure Diver, must have completed Underwater Navigation Adventure Dive</li>
<li>EFR Primary & Secondary Care training within 24 months (This can be completed alongside the rescue course</li>
    </ul>
</p><p>
<h2>Schedule </h2>

<h3>Day 1: </h3>

EFR Primary & Secondary Care (if required)

<h3>Day 2: </h3>

09:00 Theory session and Knowledge Review<br></br>
13:00 Confined water skills Practice 

<h3>Day 3:</h3>

09:00 Theory Session and Knowledge review<br></br>
13:00 Open water training from dive boat

<h3>Day 4:</h3>

09:00 Exam<br></br>
13:00 Scenario practice from boat and shore
</p>

<h2>Price</h2>

<h3>Rescue diver course 10,900 THB</h3>

<h3>Rescue diver course with EFR 13,500 THB</h3>

  </div>

  </Layout>

)
}
