import React, { useState } from "react"
import '../styles.css'
import Embed from '../component/embed';
import { soundCloudRegEx } from '../utils'

const sampleConfig = {
  path: '/song1',
  artist: 'Lord Rolex',
  songTitle: 'Downtown. Portland',
  soundcloudUrl: 'https://soundcloud.com/req-1/downtown-portland'
}

const SongPageTemplate = props => {
  console.log('the props on the song page', props);
  const md = props.data.markdownRemark
  // const { artist, songTitle } = md.frontmatter
  // grabs soundcloud url from html
  // const matched = md.html.match(soundCloudRegEx);

  // pull from fake config
  // swap this for REAL config
  const { artist, songTitle, soundcloudUrl } = sampleConfig
  const matched = soundcloudUrl.match(soundCloudRegEx);

  return (
    <div className="app--wrapper">

      <h1>{artist ? artist : 'Artist'}</h1>
      <div className="section-break" />
      <h2>{songTitle ? songTitle : 'Song Title'}</h2>
      <Embed url={matched[0]} size='l' />

    </div>
  )
}

export const pageQuery = graphql`
  query ($slug: String!) {
    site {
      siteMetadata {
        author
        description
        siteUrl
        title
      }
    }
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      frontmatter {
        artist
        songTitle
        title
      }
    }
  }
`

export default SongPageTemplate