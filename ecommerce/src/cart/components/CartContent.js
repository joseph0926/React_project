import React from "react";
import styled from "styled-components";
import { useCartContext } from "../../context/cart-context";
import { Link } from "react-router-dom";
import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";
const CartItems = () => {
  const { cart, clearCart } = useCartContext();

  return (
    <Wrapper className="section section-center">
      <CartColumns />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <hr />
      <div className="link-container">
        <Link to="/products" className="link-btn">
          계속 둘러보기
        </Link>
        <button type="button" className="link-btn clear-btn" onClick={clearCart}>
          장바구니 초기화
        </button>
      </div>
      <CartTotals />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  margin: 1rem 2rem;
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--color-pri-alt);
    color: #fff;
    border-radius: 10px;
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: var(--color-pri-alt);
  }
`;
export default CartItems;
