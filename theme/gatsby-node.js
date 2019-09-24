// Set defualt config
// @FIX 
// Can't get Node to import from another file
const defaultConfig = {
  basePath: '/tracks',
  tracks: [
    {
      path: 'Custom Path',
      artist: 'Lord Rolex',
      title: 'Downtown. Portland',
      url: 'https://soundcloud.com/req-1/downtown-portland'
    }
  ]
}


exports.createPages = async ({ graphql, actions }, options) => {
  const { createPage } = actions

  const soundcloud = options.soundcloud || defaultConfig;
  const { tracks, basePath: configBasePath } = soundcloud;

  // Get Template
  const TrackTemplate = require.resolve(`./src/templates/song-from-config.js`)

  // Create Slugs
  // feels dirty doing it this way
  const basePath = configBasePath || defaultConfig.basePath;

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
  // Can we check to see if there is already a page at index?
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
}