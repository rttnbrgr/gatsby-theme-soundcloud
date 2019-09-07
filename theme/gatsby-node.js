const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const songPage = path.resolve(`./src/templates/song-page.js`)
  const result = await graphql(
    `
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    console.log('post', post);

    createPage({
      path: post.node.fields.slug,
      component: songPage,
      context: {
        slug: post.node.fields.slug,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    console.log('value', value)
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

/**
 * @DONE
 test query
 setup template
 test template as page
 test graphql query
 build single page query
 use in template
 build single page
 abstract into template
 build pages from node
 * @TODO
 */
