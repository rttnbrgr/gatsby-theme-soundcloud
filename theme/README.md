# Gatsby Theme Soundcloud

Get a homepage for your song!

This is a pretty simple plugin to get a page for your soundcloud song. It uses the config object to programatically build pages. 

## Config Options

Setup the plugin in `gatsby-config.js` with the rest of your plugins.

```gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: '@rttnbrgr/gatsby-theme-soundcloud',
      options: {
        // All options go in the soundcloud key
        soundcloud: {
          // optional path for all your pages
          basePath: 'my-songs',
          // an array of track objects
          tracks: [
            {
              artist: 'Amine' // name of the artist
              title:  '' // name of the track
              url:    '' // link to soundcloud track page
            }
            ...
          ]
        }
      }
    }
  ]
}
```

## Roadmap
This is the shitty first draft of an idea I have had for a while. 
I've got some ideas for what this could turn into, but nothing solid.

Bug me on twitter if you have thoughts or file an issue.

<!-- ## Simple Walk through
a) If you don't have gatsby installed, 
install the hello world starter

b) install the theme

c) edit config

d) run the dev server

e) deploy to netlify

f) watch your streams come in -->


## Live demo
Check out the demo on [codesandbox](https://codesandbox.io/s/github/rttnbrgr/gatsby-theme-soundcloud-single/tree/RC-shitty-first-draft/demo)