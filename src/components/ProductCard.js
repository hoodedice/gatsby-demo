import styled from "styled-components";

import React from "react";
import { Heading3, Heading4, Heading5 } from "./base/Heading";
import { GatsbyImage } from "gatsby-plugin-image";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`

function ProductCard({ product }) {

  return (
    <Card>
      <GatsbyImage image={product.image} alt={product.name} />
      {product.special && <Heading5 inputColor="red">{product.special}</Heading5>}
      <Heading3>{product.name}</Heading3>
      <Heading4>{product.category}</Heading4>
      <Heading4>{product.price}</Heading4>
    </Card>
  );
}

export default ProductCard;
