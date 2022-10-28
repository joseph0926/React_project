import React from "react";
import styled from "styled-components";
import { useCartContext } from "../../context/cart-context";
import { formatPrice } from "../../utils/helpers";
import { Link } from "react-router-dom";
const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext();

  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            총액 :<span>{formatPrice(total_amount)}</span>
          </h5>
          <p>
            수수료 :<span>{formatPrice(shipping_fee)}</span>
          </p>
          <hr />
          <h4>
            주문 총액 :<span>{formatPrice(total_amount + shipping_fee)}</span>
          </h4>
        </article>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid #999;
    border-radius: 5px;
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
`;

export default CartTotals;
