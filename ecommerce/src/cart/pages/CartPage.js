import React from "react";
import styled from "styled-components";
import { useCartContext } from "../../context/cart-context";
import { Link } from "react-router-dom";
import CartContent from "../components/CartContent";

const CartPage = () => {
  const { cart } = useCartContext();
  if (cart.length < 1) {
    return (
      <Wrapper className="page-100">
        <div className="empty">
          <h2>카트가 비어있습니다!</h2>
          <Link to="/player" className="asdf-btn">
            제품 둘러보기
          </Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <main>
      <Wrapper className="page">
        <CartContent></CartContent>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
  .asdf-btn {
    color: #fff;
    background-color: red;
    padding: 0.5rem 1rem;
  }
`;

export default CartPage;
