/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `demo`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png",
      }
    }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", `gatsby-transformer-json`, 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "productImages",
        "path": "./src/images/products"
      },
      __key: "productImages"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "products",
        "path": "./src/products.json"
      }
    }
    // require.resolve('./source-plugin')
  ]
};
