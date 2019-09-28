module.exports = {
  plugins: [
    {
      resolve: '@rttnbrgr/gatsby-theme-soundcloud',
      options: {
        soundcloud: {
          basePath: 'acq',
          tracks: [
            {
              artist: "Lord Rolex",
              title: "Downtown. Portland",
              url: "https://soundcloud.com/req-1/downtown-portland"
            },
            {
              artist: "Norfway Nicky",
              title: "We On (ft. Mack the Shark)",
              url:
                "https://soundcloud.com/tasteclub/we-on-produced-by-rolex-req"
            },
            {
              artist: "Stanley x Vaughn",
              title: "Couple Thangs",
              url:
                "https://soundcloud.com/stanleyxvaughn8/couple-thangs-produced-by-req-still-iz"
            },
            {
              artist: "Mack the Shark",
              title: "Alone",
              url:
                "https://soundcloud.com/trdwstmackrcketpowr/alone-rcket-powr-4-mixtape"
            }
          ]
        }
      }
    }
  ]
}