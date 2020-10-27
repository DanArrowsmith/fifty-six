// Logo.js
import React from "react"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"

const HeroImage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "anemone-fish" }, extension: { eq: "jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
      <Img fluid={data.file.childImageSharp.fluid} alt="Anemone Fish" />
  )
}

export default HeroImage
