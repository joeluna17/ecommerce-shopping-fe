module.exports = {
  siteMetadata: {
    siteUrl: "https://unruffled-snyder-40f2b9.netlify.app",
    title: "shopping-app-fe",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/blog`,
      },
      __key: "images",
    },
    `gatsby-transformer-remark`
  ],
};
