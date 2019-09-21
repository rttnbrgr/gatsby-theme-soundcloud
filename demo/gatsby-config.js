module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-soundcloud-single',
      options: {
        sampleBool: true,
        soundcloud: {
          basePath: 'songs',
          tracks: [
            {
              path: '/song1',
              artist: 'Lord Rolex',
              title: 'Downtown. Portland',
              url: 'https://soundcloud.com/req-1/downtown-portland'
            },
            {
              artist: 'Stanley Vaughn',
              title: 'Couple Thangs',
              url: 'https://soundcloud.com/stanleyxvaughn8/couple-thangs-produced-by-req-still-iz'
            }
          ]
        }
      }
    }
  ]
}