const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  //fmImagesToRelative(node)
  if (
    node.internal.type === `MarkdownRemark` &&
    (node.frontmatter.template === 'about' || node.frontmatter.template === 'legal' )   
  ) {
    const slug = createFilePath({ node, getNode, basePath: `content` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}