import React from "react";

import dummyPlayer from "../../dummyPlayer";
import styled from "styled-components";
import Player from "./Player";

const FeaturedPlayers = () => {
  return (
    <Wrapper className="section">
      <div className="title">
        <h2>Featured Player</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center featured">
        {dummyPlayer.slice(0, 3).map((player) => {
          return <Player key={player.id} {...player}></Player>;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: linear-gradient(180deg, rgb(108, 33, 33, 0.3), var(--color-dark-red));
  margin-top: 10rem;
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 992px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .title h2 {
      margin: 2rem 0;
    }
  }
`;

export default FeaturedPlayers;
