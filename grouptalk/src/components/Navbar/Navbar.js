import React, { useState } from "react";

import styles from "./Navbar.module.css";
import styled from "styled-components";

import { AiFillHome } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { FaUserAlt, FaShareAlt } from "react-icons/fa";
import { BsFillChatDotsFill, BsFillBarChartFill, BsTelephoneFill } from "react-icons/bs";
import { MdAdminPanelSettings } from "react-icons/md";
import { GiCancel } from "react-icons/gi";

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
        <span className="s1">
          <AiFillHome></AiFillHome>
        </span>
        <span className="s2">
          <FaUserAlt></FaUserAlt>
        </span>
        <span className="s3">
          <FiLogIn></FiLogIn>
        </span>
        <span className="s4">
          <BsFillChatDotsFill></BsFillChatDotsFill>
        </span>
        <span className="s5">
          <MdAdminPanelSettings></MdAdminPanelSettings>
        </span>
        <span className="s6">
          <BsFillBarChartFill></BsFillBarChartFill>
        </span>
        <span className="s7">
          <BsTelephoneFill></BsTelephoneFill>
        </span>
        <span className="s8">
          <FaShareAlt></FaShareAlt>
        </span>
        <span className="s9">
          <GiCancel></GiCancel>
        </span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  bottom: 1%;
  left: 47%;
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
    --y: -1;
  }
`;

export default Navbar;
