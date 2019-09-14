module.exports = {
  siteMetadata: {
    title: `Gatsby Theme Soundcloud`,
    author: `Joel Turner && rttnbrgr`,
    description: `Put words here`,
    siteUrl: `https://joelturner.com/`,
    social: {},
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `data`,
        path: `${__dirname}/src/soundcloud/`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-embed-soundcloud"
        ]
      }
    }
  ]
}