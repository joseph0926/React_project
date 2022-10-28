import React from "react";
import { useParams, Link } from "react-router-dom";
import dummyPlayer from "../../dummyPlayer";
import AddToCart from "../../cart/components/AddToCart";
import { formatPrice } from "../../utils/helpers";

import styled from "styled-components";

const SinglePlayerPage = () => {
  const { id } = useParams();

  const singlePlayer = dummyPlayer.find((p) => p.id === id);
  const { image, name, price, description, featured, shipping, position } = singlePlayer;

  return (
    <Wrapper>
      <div className="container">
        <Link to="/player" className="back-btn">
          back to players
        </Link>
        <div className="product-center">
          <img src={image}></img>
          <section className="content">
            <h2>{name}</h2>
            {/* <Stars stars={stars} reviews={reviews} /> */}
            <h5 className="price">{formatPrice(price)}</h5>
            <p className="desc">{description}</p>
            <p className="info">
              <span>재고 : </span>
              {price / 100 < 1000 ? "구매불가능" : "구매가능"}
            </p>
            <p className="info">
              <span>포지션 :</span>
              {position}
            </p>
            <hr />
            {price / 100 > 1000 && <AddToCart product={singlePlayer} />}
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 5rem;
    position: relative;
    margin: 5rem 5rem 0 5rem;
  }
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .product-center img {
    width: 25rem;
  }
  .price {
    color: var(--color-pri-alt);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    margin: 2rem 0 1rem 0;
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
      color: var(--color-pri-alt);
    }
  }
  .back-btn {
    position: absolute;
    top: -5%;
    left: -30%;
    color: #fff;
    background: red;
    padding: 0.3rem 0.5rem;
    border-radius: 10px;
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
    .back-btn {
      top: -5%;
      left: 0;
    }
  }
`;

export default SinglePlayerPage;
