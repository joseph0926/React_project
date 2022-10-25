import React from "react";
import { Link, NavLink } from "react-router-dom";

import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import CartButton from "../../cart/components/CartButton";

const Nav = () => {
  return (
    <Wrapper>
      <div className="center">
        <div className="header">
          <Link to="/">
            <h1>Logo</h1>
          </Link>
          <button type="button" className="toggle">
            <FaBars></FaBars>
          </button>
        </div>
        <ul className="nav-list">
          <li>
            <NavLink to="/player">Player</NavLink>
          </li>
          <li>
            <NavLink to="/about">MyPage</NavLink>
          </li>
          <li>
            <NavLink to="/setting">Setting</NavLink>
          </li>
        </ul>
        <CartButton></CartButton>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .center {
    width: 90vw;
    margin: 0 auto;
    max-width: 100vw;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .header h1 {
    font-size: 2.5rem;
    color: #fff;
  }

  .toggle {
    background: transparent;
    border: transparent;
    color: #fff;
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }

  .nav-list {
    display: none;
  }

  @media (min-width: 992px) {
    .center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }

    .header h1 {
      font-size: 3rem;
    }

    .toggle {
      display: none;
    }

    .nav-list {
      display: flex;
      justify-content: center;
      margin-right: -5rem;
      li {
        margin: 0 1rem;
      }
      a {
        color: var(--color-pri-alt);
        font-size: 1.4rem;
        font-weight: 700;
        text-transform: capitalize;
        padding: 0.5rem;
      }
      a.active {
        border-bottom: 5px solid var(--color-pri);
      }
    }
  }
`;

export default Nav;
