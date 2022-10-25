import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import styled from "styled-components";

const CartButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Wrapper>
      <Link to="/cart" className="cart-btn">
        Cart
        <span className="container">
          <FaShoppingCart></FaShoppingCart>
          <span className="cart-value">5</span>
        </span>
      </Link>
      <Link to="/auth" className="auth-btn">
        Login <FaUserPlus></FaUserPlus>
      </Link>
      {isLoggedIn && (
        <Link to="/auth" className="auth-btn">
          Logout <FaUserMinus></FaUserMinus>
        </Link>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 15rem;

  .cart-btn {
    color: #fff;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
  }
  .container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--color-pri-alt);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 1rem;
    color: #fff;
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: #fff;
    svg {
      margin-left: 5px;
    }
  }
`;

export default CartButton;
