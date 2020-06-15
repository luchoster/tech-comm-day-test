// In your gatsby-config.js file
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: `Gatsy Started`,
    description: `Simple Gatsby theme with scss and material-ui support`,
    author: `@luchoster`
  },
  plugins: [
    {
      resolve: 'gatsby-theme-luchoster-base'
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.SANITY_ID,
        dataset: process.env.SANITY_DATASET,
        watchMode: false,
        token: process.env.SANITY_TOKEN
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    }
  ]
}
