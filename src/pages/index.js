import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Index = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div id="ug-intro-page">
        <SEO title="Home" keywords={[`some words in here...`]} />

        <GatsbyImage
          image={post.frontmatter.image.childImageSharp.gatsbyImageData}
          className="img-fluid"
          alt={post.frontmatter.alttext}
        />

        <GatsbyImage
          image={post.frontmatter.foreimage.childImageSharp.gatsbyImageData}
          className="img-fluid"
          alt={post.frontmatter.forealttext}
        />

      </div>

    </Layout>
  )
}
export default Index 

export const query = graphql`
  query {
    markdownRemark(frontmatter: { name: { eq: "index" } }) {
      frontmatter {
        image {
          childImageSharp {
            gatsbyImageData(placeholder: NONE, width: 3000, quality: 90) 
          }
        }
        alttext
      }
    }
  }
`