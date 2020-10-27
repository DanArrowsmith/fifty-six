module.exports = {
  plugins: [
    'gatsby-plugin-top-layout',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
      pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: 'gatsby-plugin-material-ui',
      // If you want to use styled components you should change the injection order.
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      },
    },
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    { resolve: `gatsby-source-filesystem`, options: { path: `./src/` } },
  ],
  siteMetadata: {
    title: 'My page',
  },
};
