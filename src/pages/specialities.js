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
  <h1>Speciality Courses</h1>
<p>
Being a certified diver allows you to explore the amazing underwater world and see things most people only dream about.
</p><p>
PADI specialty courses will allow you to take this even further and open up a whole new world of dive sites to you. From deep diving to wreck diving or even using 2 tanks at once, the possibilities are endless.
</p><p>
Here at Fifty Six we offer a wide range of specialty courses for you to consider.  Taking a specialty is a great way to learn fun new skills and explore your areas of interest in more detail.  Perhaps you’ve always found wrecks fascinating and now want to find out what’s inside one? Or maybe it was seeing other divers use Enriched air (Nitrox) and wondered what it was.  
</p><p>
If this sounds like you what are you waiting for? Contact us today to book your specialty course and take your diving to the next level. 
</p><p>












<h2>PADI Deep Diver</h2>

“How deep was your dive?” <br></br>
How many times have you been asked this by a non-diver? To them, and to most, your depth is what determines that “Wow” factor of a dive and with good reason. We as a species have always been driven to go further, see more, and to explore the beyond.  The PADI Deep Diver course allows you to do just that, to explore a plethora of untouched deeper wrecks, reefs and walls and to go far beyond what your average diver ever sees. 
</p><p>
<h2>What’s Included?</h2>
<ul>
<li>PADI Deep Diver Manual</li>
<li>Rental of all scuba equipment (including dive computer)</li>
<li>PADI Certification</li>
<li>FREE pick up from Pier</li>
<li>Amazing dive shop location</li>
<li>Four training dives</li>
</ul>
</p><p>
<h2>What you will learn</h2>

During this course you will learn how to safely conduct no decompression dives between 18m - 40m.  This will include deep dive planning procedures, setting up and using deep diving equipment, gas management, using dive computers, narcosis and safety considerations at depth.
</p><p>
 <h2>Prerequisites</h2>
<ul>
<li>PADI Adventure Diver or PADI Advanced Open Water (or equivalent certification from another agency) </li>
<li>15 Years Old</li> </ul>
</p><p>
<h2>Course Schedule </h2>

Day 1: Meet your instructor, course orientation and theory session, Dives 1+2<br></br>

Day 2: Training Dives 3+4, certification, logbook, celebration
</p><p>
<h2>Price </h2>

<h3>The PADI Deep Diver Course is 8,000 THB </h3>
</p><p>
Want to stay deeper for longer?
</p><p>
Combine the PADI Enriched Air Specialty with your Deep specialty to increase your bottom times and maximize your deep diving potential. (Recommended for dives below 30m)
</p><p>





<h2>PADI Wreck Diver</h2>

Wreck diving is one of the most fascinating aspects of scuba diving, it connects diving with history and there are thousands of wrecks to discover around the world.  
Scuba divers tend to be adventurous people, the chance to explore sunken wrecks is something most just can’t resist.  The thrill and excitement experienced as you look upon what was once a living piece of history is unmatched. Whether navigating the outside, looking upon the marine life or exploring the inside, wreck diving has something to offer everyone.
</p><p>
<h2>What’s Included</h2>
<ul><li>PADI Wreck Diver Manual</li>
<li>Rental of all scuba equipment (including dive computer)</li>
<li>PADI Certification</li>
<li>FREE pick up from Pier</li>
<li>Amazing dive shop location</li>
<li>Four training dives (including wreck penetration)</li></ul>
</p><p>
<h2>What you will learn</h2>

On the PADI Wreck Diver course we will focus on teaching you many skills and techniques that will allow you to safely evaluate, plan and execute wreck dives.  These skills include mapping the layout of a wreck, use of penetration reels to aid in exploration, techniques on how avoid silting out wrecks and of course learning all the safety considerations to think about when exploring wrecks.
Prerequisites
</p><p>
PADI Adventure Diver or PADI Advanced Open Water (or equivalent certification from another agency) 
15 Years Old 
</p><p>
<h2>Course Schedule </h2>

Day 1: Meet your instructor, course orientation and theory session, Dives 1+2<br></br>

Day 2: Training Dives 3+4, certification, logbook, celebration
</p><p>
<h2>Price </h2>

<h3>The PADI Wreck Diver Course is 8,000 THB </h3>
</p><p>
Explore even more of each wreck you see:

Earn two-specialty certifications by combining the PADI Enriched Air Specialty with your Wreck specialty to increase your bottom times and maximize your Wreck diving potential. (Recommended for dives below 30m
PADI Enriched Air Diver
</p><p>
One of the most frustrating things a diver can encounter is being on an amazing dive looking at some of the most fantastic marine life you’ve seen, then having to end the dive because you are reaching your maximum nitrogen levels (NDL).  Using Enriched Air (Nitrox) increases your bottom time by reducing the nitrogen load during dives.
</p><p><h2>What’s Included</h2>
<ul>
<li>PADI Enriched Air Manual</li>
<li>Rental of all scuba equipment (including dive computer)</li>
<li>PADI Certification</li>
<li>FREE pick up from Pier</li>
<li>Amazing dive shop location</li></ul>
</p><p>
<h2>What you will learn</h2>

On completion of the Enriched Air Specialty you will be able to safely plan and perform dives using an Enriched blend up to 40% oxygen.  During your course will we show you how to use decompression models (Dive tables, or Dive computer) to manage O2 exposure limits, setting your dive computer for use with enriched air, how to analyze your tanks and keep a safety log.  
</p><p>Prerequisites
<ul>
<li>PADI (Junior) Open Water Diver </li>
<li>12 Years Old </li></ul>
</p><p>
<h2>Course Schedule </h2>

Day 1: <br></br>
Orientation, <br></br>
Training Video<br></br>
Knowledge Development Session<br></br>
Exam<br></br>
Analyzing Tanks<br></br>

Day 2: (Optional)<br></br>
2 Training Dives with Enriched Air
</p><p>
<h2>Price</h2>

<h3>Option 1 Dry Course No dives  5,000 THB</h3> 
<h3>Option 2 Wet Course 2 dives   6,000 THB</h3>     
</p><p>Want More?</p><p>
For the ultimate Enriched air experience why not combine the PADI Deep or Wreck Specialty with your Enriched Air course? 
</p>

  </div>

  </Layout>

)
}
