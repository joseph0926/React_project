import React from "react";
import { Link } from "react-router-dom";

import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

const Player = (props) => {
  const { image, name, price, id } = props;

  return (
    <Wrapper>
      <div className="container">
        <img src={image}></img>
        <Link to={`/player/${id}`} className="link">
          <FaSearch></FaSearch>
        </Link>
      </div>
      <footer>
        <h5>{name}</h5>
        <p>{price / 100 < 1000 ? "구매불가능" : "구매가능"}</p>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .container {
    position: relative;
    background: black;
    border-radius: 10px;
  }
  img {
    width: 100%;
    display: block;
    object-fit: contain;
    border-radius: 10px;
    transition: all 0.5;
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--color-pri-alt);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: all 0.5s;
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: #fff;
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }

  footer p {
    color: #fff;
  }
`;

export default Player;
