import React from "react"

const SongPageTemplate = props => {
  console.log('the props', props);
  const siteTitle = props.data.site.siteMetadata.title
  return (
    <div>
      <h1>Homepage</h1>
      <span>>{siteTitle}</span>
    </div>
  )
}

export const pageQuery = graphql`
  query homePageQuery {
    site {
      siteMetadata {
        author
        description
        siteUrl
        title
      }
    }
  }
`

export default SongPageTemplate