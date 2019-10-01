import React from "react"
import '../styles.css'
import Embed from '../component/embed';
import { soundCloudRegEx } from '../utils'

const SongPageTemplate = props => {
  console.log('the props on the song page', props);

  const { artist, title, url } = props.pageContext.track;
  const matched = url.match(soundCloudRegEx);

  return (
    <div className="app--wrapper">

      <h1>{artist ? artist : 'Artist'}</h1>
      <div className="section-break" />
      <h2>{title ? title : 'Song Title'}</h2>
      <Embed url={matched[0]} size='l' />

    </div>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        author
        description
        siteUrl
        title
      }
    }
    sitePlugin(name: {eq: "@rttnbrgr/gatsby-theme-soundcloud"}) {
      id
      pluginOptions {
        soundcloud {
          tracks {
            title
            url
          }
          basePath
        }
      }
    }
  }
`

export default SongPageTemplate