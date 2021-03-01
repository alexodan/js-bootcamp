module.exports = {
  siteMetadata: {
    title: 'JavaScript Bootcamp Libre',
    description: '...',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: 'src/pages', // will look for a folder called 'pages'
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'images', // will look for a folder called 'pages'
      },
    },
  ],
}
