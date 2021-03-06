require(`dotenv`).config({
  path: `.env`,
});

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;
module.exports = {
  siteMetadata: {
    siteTitle: `BFiles`,
    author: `festerman`,
    siteTitleAlt: `BFiles`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        formatString: `YYYY-MM-DD`,
        navigation: [
          {
            title: `Sidor`,
            slug: `/pages`,
          },
          {
            title: `Blogg`,
            slug: `/blog`,
          },
          {
            title: `Taggar`,
            slug: `/tags`,
          },
          {
            title: `Om`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Anbytarforum`,
            url: `https://forum.rotter.se/index.php?action=profile;u=63160`,
          },
          {
            name: `WikiTree`,
            url: `https://www.wikitree.com/wiki/Bergh-906`,
          },          
        ],
      },
    },
//    {
//      resolve: `gatsby-plugin-google-analytics`,
//      options: {
//        trackingId: process.env.GOOGLE_ANALYTICS_ID,
//      },
//    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `minimal-blog - @lekoarts/gatsby-theme-minimal-blog`,
        short_name: `minimal-blog`,
        description: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and code highlighting.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
//    {
//      resolve: "gatsby-source-filesystem",
//      options: {
//        name: "MDXImages",
//        path: "src/images/",
//      },
//    },
// already in the theme
//    "gatsby-plugin-sharp",
//    "gatsby-transformer-sharp",
//    {
//      resolve: "gatsby-plugin-mdx",
//      options: {
//        gatsbyRemarkPlugins: [
//          {
//            resolve: "gatsby-remark-images",
//            options: {
//              maxWidth: 1200,
//            },
//          },
//        ],
//      },
//    },
  ].filter(Boolean),
};
