module.exports = {
  siteMetadata: {
    // edit below
    title: `digital creative.`,
    author: `Fabian Wohlgemuth`,
    description: 'This website is under heavy development. If you need any consultation, please visit fabianwohlgemuth.de - thanks!',
    siteUrl: `https://wohfab.netlify.com/`,
    social: {
      twitter: `wohfab`,
    },
    menuMain:[
      {
        name:'Projects',
        link:'/projects'
      },
      {
        name:'Me',
        link:'/me'
      },
    ],
    menuSocial:[
      {
        name:'Twitter',
        link:'/'
      },
      {
        name:'LinkedIn',
        link:'/'
      },
      {
        name:'GitHub',
        link:'/'
      },
      {
        name:'Instagram',
        link:'/'
      },
      {
        name:'Reddit',
        link:'/'
      },
    ],
    menuLegal:[
      {
        name:'Legal Information',
        link:'/legal'
      },
      {
        name:'Terms & Conditions',
        link:'/legal/terms'
      },
      {
        name:'Privacy Statement',
        link:'/legal/privacy'
      },
      {
        name:'Cookie Policy',
        link:'/legal/cookies'
      },      
      {
        name:'GDPR',
        link:'/legal/gdpr'
      },
    ],
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-feed-mdx`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/projects`,
        name: `projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-vscode`,
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
          {
            resolve: `gatsby-remark-smartypants`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // edit below
        trackingId: `UA-97919061-6`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `fabian wohlgemuth - digital creative.`,
    //     short_name: `fwdc.`,
    //     start_url: `/`,
    //     background_color: `#222222`,
    //     theme_color: `#EE6600`,
    //     display: `standalone`,
    //     // edit below
    //     icon: `content/assets/logos/fwdc_xl_tp.png`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
