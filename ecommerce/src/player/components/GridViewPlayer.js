import React from "react";
import styled from "styled-components";
import Player from "./Player";

const GridViewPlayer = (props) => {
  return (
    <Wrapper>
      <div className="products-container">
        {props.products.map((product) => {
          return <Player key={product.id} {...product}></Player>;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  img {
    height: 175px;
  }

  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default GridViewPlayer;
