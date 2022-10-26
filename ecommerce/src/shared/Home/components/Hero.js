import React from "react";

import IMG1 from "../../../assets/hero.jpg";
import IMG2 from "../../../assets/dejong.png";
import styled from "styled-components";

const Hero = () => {
  return (
    <Wrapper>
      <div className="main">
        <img src={IMG1}></img>
        <div className="container">
          <div className="text-info">
            <h1>
              바르셀로나 <br></br>
              <span>이적시장</span>
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
              text ever since the 1500s,
            </p>
          </div>
          <div className="left-img">
            <img src={IMG2}></img>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .main img {
    width: 100%;
    background-position: center;
    background-size: cover;
    height: 70vh;
    filter: brightness(50%);
    position: absolute;
    z-index: -1;
  }

  .container {
    display: grid;
    grid-template-columns: 1fr;
    margin: 0 1rem;
    gap: 5rem;
    filter: brightness(180%);
  }

  .text-info {
    margin-top: 7rem;
  }
  .text-info h1 {
    color: var(--color-pri-alt);
  }
  .text-info p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: #999;
    font-size: 1rem;
  }

  .left-img img {
    display: none;
  }

  @media (min-width: 992px) {
    h1 {
      font-size: 3rem;
      margin-bottom: 2rem;
      color: #fff;
    }
    p {
      font-size: 1.25rem;
    }
    .container {
      grid-template-columns: 1fr 1fr;
      margin: 0rem 3rem 0 5rem;
    }
    .left-img img {
      display: block;
      width: 30rem;
    }
  }
`;

export default Hero;
