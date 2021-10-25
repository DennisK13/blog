module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "HVAC Blog Site",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "f9xL01erPufPjt79-dtfm165ghvYqMgUYmDvQc1ABCM",
        spaceId: "r76q5cxut9uw",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },

    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `posts`,
        path: `./src/posts`,
      },
      __key: "posts"
    },
    "gatsby-plugin-mdx",
  ],
};
