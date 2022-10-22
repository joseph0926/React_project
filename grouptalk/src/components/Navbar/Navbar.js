import React, { useState } from "react";

import styles from "./Navbar.module.css";
import styled from "styled-components";

const Navbar = () => {
  const [showNav, setShowNav] = useState("nav");
  const navHandler = () => {
    if (showNav === "nav") {
      setShowNav("nav-active");
    }
    if (showNav === "nav-active") {
      setShowNav("nav");
    }
  };

  return (
    <Wrapper>
      <div className={styles[showNav]} onClick={navHandler}>
        <span className="s1"></span>
        <span className="s2"></span>
        <span className="s3"></span>
        <span className="s4"></span>
        <span className="s5"></span>
        <span className="s6"></span>
        <span className="s7"></span>
        <span className="s8"></span>
        <span className="s9"></span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  .s1 {
    --i: 0;
    --x: -1;
    --y: 0;
  }
  .s2 {
    --i: 1;
    --x: 1;
    --y: 0;
  }
  .s3 {
    --i: 2;
    --x: 0;
    --y: -1;
  }
  .s4 {
    --i: 3;
    --x: 0;
    --y: 1;
  }
  .s5 {
    --i: 4;
    --x: 1;
    --y: 1;
  }
  .s6 {
    --i: 5;
    --x: -1;
    --y: -1;
  }
  .s7 {
    --i: 6;
    --x: 0;
    --y: 0;
  }
  .s8 {
    --i: 7;
    --x: -1;
    --y: 1;
  }
  .s9 {
    --i: 8;
    --x: 1;
    --y: 1;
  }
`;

export default Navbar;
