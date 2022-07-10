module.exports = {
  siteMetadata: {
    title: `Bennet Schwarz, Frontend Developer, Germany`,
    description: `Bennet Schwarz. Frontend Dev, Web Designer, UI/UX.`,
    author: `Bennet Schwarz`,
    siteUrl: `https://www.bennetschwarz.de`,
  },

  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-preload-fonts`,  
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pdf`,
        path: `${__dirname}/static/` 
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto`,
          `Montserrat\:700` 
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: ``,
        short_name: ``,
        icon: `src/images/favicon-16x16.png`,
        start_url: `/`,
        background_color: `#0D0E0F`,
        theme_color: `#f9004d`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
