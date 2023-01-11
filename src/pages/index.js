import * as React from "react"
import { graphql } from 'gatsby'
import ProductGrid from "../components/ProductGrid";
import Layout from "./layout";
import "./reset.css";
import { ProductCard } from "../components";
import { getImage } from "gatsby-plugin-image";

export const query = graphql`
  query {
    allProductsJson {
      edges {
        node {
          id
          name
          special
          price
          image {
            childImageSharp {
              gatsbyImageData(width: 400)
            }
          }
          category
          price
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {

  return (
    <Layout>
      <ProductGrid>
        {
          data.allProductsJson.edges.map(node => {
            const { node: product } = node
            product["image"] = getImage(product.image)
            console.log(product)
            return (
            <ProductCard
              key={product.id}
              product={product}
            />
          )})
        }
      </ProductGrid>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Products</title>
