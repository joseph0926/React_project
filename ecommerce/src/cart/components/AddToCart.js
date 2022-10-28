import React, { useState } from "react";
import styled from "styled-components";
import { useCartContext } from "../../context/cart-context";
import AmountButtons from "./AmountButtons";

const AddToCart = (props) => {
  const { addToCart } = useCartContext();

  const { id } = props.product;

  const [amount, setAmount] = useState(1);
  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > 3) {
        tempAmount = 3;
      }
      return tempAmount;
    });
  };
  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };

  const addToCartHandler = () => {
    addToCart(id, amount, props.product);
    alert("카트에 추가되었습니다.");
  };

  return (
    <Wrapper>
      <div className="btn-container">
        <AmountButtons amount={amount} increase={increase} decrease={decrease}></AmountButtons>
        <button className="btn" onClick={addToCartHandler}>
          add to cart
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
  margin-bottom: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
    background: transparent;
    border: transparent;
    background: red;
    color: #fff;
    padding: 0.5rem 0.8rem;
    font-size: 1.2rem;
    cursor: pointer;
  }
`;
export default AddToCart;
