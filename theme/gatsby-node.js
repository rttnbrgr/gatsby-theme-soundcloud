const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// const SongFromMarkdownTemplate = path.resolve(`./src/templates/song-from-md.js`)
// const SongFromConfigTemplate = path.resolve(`./src/templates/song-from-config.js`)
const TrackTemplate = require.resolve(`./src/templates/song-from-config.js`)

exports.createPages = async ({ graphql, actions }, options) => {
  const { createPage } = actions

  console.log('it works!')
  console.log('options', options);
  console.log('soundcloud', options.soundcloud);

  console.log('===== PATH ======')
  console.log('SongFromConfigTemplate', TrackTemplate);

  // const result = await graphql(
  //   `
  //     {
  //       allMarkdownRemark {
  //         edges {
  //           node {
  //             fields {
  //               slug
  //             }
  //             frontmatter {
  //               title
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `
  // )

  // if (result.errors) {
  //   throw result.errors
  // }

  // // Create blog posts pages.
  // const posts = result.data.allMarkdownRemark.edges

  // Get list of Soundcloud configs
  const tracks = options.soundcloud.tracks;

  // posts.forEach((post, index) => {
  //   console.log('post', post);

  //   createPage({
  //     path: post.node.fields.slug,
  //     component: SongFromMarkdownTemplate,
  //     context: {
  //       slug: post.node.fields.slug,
  //     },
  //   })
  // })

  // create slugs
  // feels dirty doing it this way
  const basePath = options.soundcloud.basePath || "/tracks";
  // Quick-and-dirty helper to convert strings into URL-friendly slugs.
  const slugify = str => {
    const slug = str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "")
    return `/${basePath}/${slug}`.replace(/\/\/+/g, "/")
  }

  // Create pages for each track
  tracks.forEach((track, index) => {
    console.log('track', track);
    createPage({
      // use the path if explicitly provide, otherwise, slugify the title
      path: slugify(track.path || track.title),
      component: TrackTemplate,
      context: {
        track: {
          artist: track.artist,
          title: track.title,
          url: track.url
        }
      }
    })
  })

  // Create index page for primary track
  const someCheckForWhatIsPrimary = tracks[0];
  createPage({
    path: '/',
    component: TrackTemplate,
    context: {
      track: {
        artist: someCheckForWhatIsPrimary.artist,
        title: someCheckForWhatIsPrimary.title,
        url: someCheckForWhatIsPrimary.url
      }
    }
  })



  // // build new sample page, from the LAST post
  // createPage({
  //   path: '/new',
  //   component: SongFromConfigTemplate,
  //   context: {
  //     slug: posts[posts.length - 1].node.fields.slug,
  //   },
  // })

}

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === `MarkdownRemark`) {
//     const value = createFilePath({ node, getNode })
//     console.log('value', value)
//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }