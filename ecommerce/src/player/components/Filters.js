import React, { useContext } from "react";
import Filter02Context from "../../context/filter02_context";
import { formatPrice } from "../../utils/helpers";

import styled from "styled-components";
import dummyPlayer from "../../dummyPlayer";

const Filters = () => {
  const filterCtx = useContext(Filter02Context);
  const {
    position,
    filterposition,
    updateFilters,
    filters: { text, min_price, price, max_price },
  } = filterCtx;

  return (
    <Wrapper>
      <div className="form-control position-container">
        <h5>position</h5>
        <div className="position-center">
          {position.map((p, index) => {
            return (
              <button className="position-btn" type="button" key={index} name="position" onClick={updateFilters}>
                {p}
              </button>
            );
          })}
        </div>
      </div>
      <div className="form-control price-container">
        <h5>price</h5>
        <p className="price">{formatPrice(price)}</p>
        <input type="range" name="price" min={min_price} max={max_price} value={price} onChange={updateFilters} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      font-size: 1.3rem;
      margin-bottom: 0.5rem;
      margin-left: 1rem;
      color: var(--color-pri);
    }
  }

  .position-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .price-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .position-btn {
    background: transparent;
    border: transparent;
    color: #fff;
    font-size: 1rem;
    font-weight: 700;
    margin: 1rem;
    cursor: pointer;
    transition: all 0.5s;
  }
  .position-btn:hover {
    width: 100px;
    transform: translateX(20px);
    background: linear-gradient(270deg, var(--color-pri), black);
  }

  @media (min-width: 992px) {
    .content {
      position: sticky;
      top: 1rem;
    }

    .position-container {
      flex-direction: column;
    }

    .position-btn {
      width: 100px;
      display: grid;
      margin: 1rem -1rem;
      grid-template-columns: 1fr;
    }
  }
`;

export default Filters;
