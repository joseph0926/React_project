import React, { Fragment, useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import CartButton from "../../cart/components/CartButton";
import { useCartContext } from "../../context/cart-context";
import AuthContext from "../../context/auth-context";

import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";

import Nav from "./Nav";
import SideDrawer from "./SideDrawer";
import Backdrop from "./Backdrop";
import { FaBars } from "react-icons/fa";

import styled from "styled-components";

const NavHandler = () => {
  const { total_items } = useCartContext();
  const authCtx = useContext(AuthContext);
  const { isLoggedIn, logout } = authCtx;

  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerOpenHandler = () => {
    if (drawerOpen === false) {
      setDrawerOpen(true);
    }
    if (drawerOpen === true) {
      setDrawerOpen(false);
    }
  };
  const drawerCloseHandler = () => {
    setDrawerOpen(false);
  };

  return (
    <Wrapper>
      {drawerOpen && <Backdrop onClick={drawerCloseHandler}></Backdrop>}
      <SideDrawer show={drawerOpen} close={drawerCloseHandler}>
        <div className="center">
          <div className="header">
            <Link to="/">
              <h1>Logo</h1>
            </Link>
            {/* <button type="button" className="toggle">
            <FaBars></FaBars>
          </button> */}
          </div>
          <ul className="nav-list">
            <li>
              <NavLink to="/player">Player</NavLink>
            </li>
            {isLoggedIn && (
              <li>
                <NavLink to="/about">MyPage</NavLink>
              </li>
            )}
            <li>
              <NavLink to="/setting">Setting</NavLink>
            </li>
          </ul>
          {isLoggedIn && (
            <Link to="/cart" className="cart-btn">
              Cart
              <span className="container">
                <FaShoppingCart></FaShoppingCart>
                <span className="cart-value">{total_items}</span>
              </span>
            </Link>
          )}
          {!isLoggedIn && (
            <Link to="/auth" className="auth-btn">
              Login <FaUserPlus></FaUserPlus>
            </Link>
          )}
          {isLoggedIn && (
            <Link to="/auth" className="auth-btn" onClick={logout}>
              Logout <FaUserMinus></FaUserMinus>
            </Link>
          )}
        </div>
      </SideDrawer>
      <Nav></Nav>
      <div className="nav-center">
        <button type="button" className="toggle" onClick={drawerOpenHandler}>
          <FaBars></FaBars>
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .toggle {
    background: transparent;
    border: transparent;
    color: #fff;
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }

  .nav-center {
    position: absolute;
    z-index: 101;
    right: 5%;
    top: 5%;
  }

  @media (min-width: 992px) {
    margin-left: 5rem;
    .toggle {
      display: none;
    }
  }
`;

export default NavHandler;
