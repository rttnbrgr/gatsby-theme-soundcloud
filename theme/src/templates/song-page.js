import React from "react"
import Embed, { soundCloudRegEx } from '../component/embed';

const SongPageTemplate = props => {
  console.log('the props on the song page', props);
  const song = props.data.markdownRemark
  const siteTitle = props.data.site.siteMetadata.title

  // grabs soundcloud url from html
  const matched = song.html.match(soundCloudRegEx);

  return (
    <div>
      <h1>Song Page</h1>
      <h2>Embed Test</h2>
      <Embed url={matched[0]} size='l' />
      <h2>{siteTitle}</h2>
      <pre>
        {/* {props} */}
        <section dangerouslySetInnerHTML={{ __html: song.html }} />
      </pre>
    </div>
  )
}

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