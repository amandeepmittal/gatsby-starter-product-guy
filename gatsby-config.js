module.exports = {
  siteMetadata: {
    title: `Gatsby Portfolio v3 SPA`,
    author: `Aman Mittal`,
    description: `👋 Open Source Developer`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    `gatsby-plugin-react-helmet`
  ]
};
