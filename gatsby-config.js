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
  ],
}
