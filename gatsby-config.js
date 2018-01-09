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
        name: `projects`,
        path: `${__dirname}/content/projects`
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`
  ]
};
