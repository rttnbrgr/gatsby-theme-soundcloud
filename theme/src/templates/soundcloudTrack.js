import React from "react"
import '../styles.css'
import Embed from '../component/embed';
import { soundCloudRegEx } from '../utils'
import { Link } from 'gatsby'
// No exports from node
// import { defaultConfig } from '../../gatsby-node';

const defaultConfig = {
  basePath: '/tracks'
}

const SongPageTemplate = props => {
  // console.log('the props on the song page', props);
  const { tracks, basePath: configBasePath } = props.data.sitePlugin.pluginOptions.soundcloud;
  const { artist, title, url } = props.pageContext.track;
  const matched = url.match(soundCloudRegEx);

  return (
    <div className="app--wrapper">
      <nav className="track__nav">
        {tracks.map((x, i) => {
          {/* Duplicate Logic */ }
          const basePath = configBasePath || defaultConfig.basePath;
          const slugify = str => {
            const slug = str
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/(^-|-$)+/g, "")
            return `/${basePath}/${slug}`.replace(/\/\/+/g, "/")
          }
          return (<Link to={slugify(x.title)} className="track__link">{x.title}</Link>)
        }
        )}

      </nav>

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