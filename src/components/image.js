import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

const Image = ({name, alt, className}) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      boatImage: file(relativePath: { eq: "boat.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lifeSVG: allFile(filter: {sourceInstanceName: {eq: "images"}, extension: {eq: "svg"}, name: {eq: "life"}}) {
        nodes {
          publicURL
          extension
        }
      }
      bookstoreSVG: allFile(filter: {sourceInstanceName: {eq: "images"}, extension: {eq: "svg"}, name: {eq: "bookstore"}}) {
        nodes {
          publicURL
          extension
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  if (name === "boat.png") {
    return <Img fluid={data.boatImage.childImageSharp.fluid} alt={alt} className={className} />
  } else if (name === "life.svg") {
    const image = data.lifeSVG.nodes.find(
      ({ publicURL }) => publicURL && publicURL.indexOf(name) !== -1
    );
    return <img src={image.publicURL} alt={alt} className={className}/>
  } else if (name === "bookstore.svg") {
    const image = data.bookstoreSVG.nodes.find(
      ({ publicURL }) => publicURL && publicURL.indexOf(name) !== -1
    );
    return <img src={image.publicURL} alt={alt} className={className}/>
  } else {
    return <Img fluid={data.placeholderImage.childImageSharp.fluid}/>
  }
}

export default Image
