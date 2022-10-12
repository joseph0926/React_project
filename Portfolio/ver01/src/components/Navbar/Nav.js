import React, { useState } from "react";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

const Nav = () => {
  const [link, setLink] = useState(true);

  const linkHandler = () => {
    setLink(false);
  };

  return (
    <div className={styles.container}>
      <nav>
        {link && (
          <div className={styles.nav}>
            <a href="#">
              <AiOutlineHome></AiOutlineHome>
            </a>
            <a href="#about">
              <AiOutlineUser></AiOutlineUser>
            </a>
            <a href="#service">
              <RiServiceLine></RiServiceLine>
            </a>
          </div>
        )}
        {!link && <div className={styles.nav}>
          <Link to="/">
            <AiOutlineHome></AiOutlineHome>
          </Link>
          <Link to="/">
            <AiOutlineUser></AiOutlineUser>
          </Link>
          <Link to="/">
            <RiServiceLine></RiServiceLine>
          </Link>
        </div>}
        <Link to="/projects" onClick={linkHandler}>
          <BiBook></BiBook>
        </Link>
        <Link to="/contact" onClick={linkHandler}>
          <BiMessageSquareDetail></BiMessageSquareDetail>
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
