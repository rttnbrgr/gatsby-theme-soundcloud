import React from "react"

const SongPageTemplate = props => {
  console.log('the props on the song page', props);
  const song = props.data.markdownRemark
  const siteTitle = props.data.site.siteMetadata.title
  return (
    <div>
      <h1>Song Page</h1>
      <h2>{siteTitle}</h2>
      <pre>
        {/* {props} */}
        <section dangerouslySetInnerHTML={{ __html: song.html }} />
      </pre>
    </div>
  )
}

//     return (
//       <Layout location={this.props.location} title={siteTitle}>
//         <SEO
//           title={post.frontmatter.title}
//           description={post.frontmatter.description || post.excerpt}
//         />
//         <article>
//           <header>
//             <h1
//               style={{
//                 marginTop: rhythm(1),
//                 marginBottom: 0,
//               }}
//             >
//               {post.frontmatter.title}
//             </h1>
//             <p
//               style={{
//                 ...scale(-1 / 5),
//                 display: `block`,
//                 marginBottom: rhythm(1),
//               }}
//             >
//               {post.frontmatter.date}
//             </p>
//           </header>
//           <section dangerouslySetInnerHTML={{ __html: post.html }} />
//           <hr
//             style={{
//               marginBottom: rhythm(1),
//             }}
//           />
//           <footer>
//             <Bio />
//           </footer>
//         </article>

//         <nav>
//           <ul
//             style={{
//               display: `flex`,
//               flexWrap: `wrap`,
//               justifyContent: `space-between`,
//               listStyle: `none`,
//               padding: 0,
//             }}
//           >
//             <li>
//               {previous && (
//                 <Link to={previous.fields.slug} rel="prev">
//                   ← {previous.frontmatter.title}
//                 </Link>
//               )}
//             </li>
//             <li>
//               {next && (
//                 <Link to={next.fields.slug} rel="next">
//                   {next.frontmatter.title} →
//                 </Link>
//               )}
//             </li>
//           </ul>
//         </nav>
//       </Layout>
//     )
//   }
// }

// export default BlogPostTemplate

// export const pageQuery = graphql`
//   query BlogPostBySlug($slug: String!) {
//     site {
//       siteMetadata {
//         title
//         author
//       }
//     }
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       id
//       excerpt(pruneLength: 160)
//       html
//       frontmatter {
//         title
//         date(formatString: "MMMM DD, YYYY")
//         description
//       }
//     }
//   }
// `


export const pageQuery = graphql`
  query SongBySlug($slug: String!) {
    site {
      siteMetadata {
        author
        description
        siteUrl
        title
      }
    }
    markdownRemark(fields: {slug: {eq: $slug}}) {
      id
      html
      excerpt(pruneLength: 160)
      frontmatter {
        artist
        songTitle
        title
      }
    }
  }
`

export default SongPageTemplate