import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 20px;
  grid-column-gap: 40px;
  height: 100%;
  padding: 50px;
`

function ProductGrid({ children }) {

  return (
    <Container>
      {children.map((child, index) => {
        return (
          <div key={index}>
            {child}
          </div>
        )
      })}
    </Container>
  );
}

export default ProductGrid;
