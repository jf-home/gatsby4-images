if (process.env.NODE_ENV === undefined) {
  require("dotenv").config({
    path: `.env.production`,
  })
} else {
  require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
  })
}

module.exports = {
  siteMetadata: {
    title: 'Sample site',
    description: 'Unable to get images working with Gatsby v4',
    author: 'jf-home',
  },

  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sample site`,
        short_name: `Sample site`,
        start_url: `/`,
        display: `standalone`,
        icon: `${__dirname}/src/images/avatar.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `assets`,
    //     path: `${__dirname}/static/assets`,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: 'none', 
          quality: 90, 
          formats: ['auto', 'webp']
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // {
          //   resolve: `gatsby-remark-relative-images`,
          //     options: {
          //       staticFolderName: 'static',
          //     }, 
          // },
          {
            resolve: `gatsby-remark-images`,
            options: {
              //maxWidth: 590,
            },
          },
        ],
      },
    },
    `gatsby-plugin-image`, 
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `DM Sans\:400,500,700`,
          `Sarabun\:200,300,400,700,800`,
          `Montserrat\:400,700`
        ],
        display: 'swap'
      }
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/*': [
            'X-Frame-Options: DENY',
            'X-XSS-Protection: 1; mode=block',
            'X-Content-Type-Options: nosniff',
            'Referrer-Policy: no-referrer-when-downgrade',
          ],
        },
      },
    },
    // `gatsby-transformer-remark-frontmatter`, 
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-offline`,
  ],
}