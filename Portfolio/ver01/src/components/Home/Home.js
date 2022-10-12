import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Logo from "./Logo";

const Home = () => {
  return (
    <header>
      <div className={styles.container}>
        <h5>Hello!</h5>
        <h1>joseph0926's Portfolio</h1>
        <h5 className={styles["text-light"]}>BackEnd + FrontEnd</h5>
        <div className={styles["link-container"]}>
          <Link to="/contact" className={styles.btn}>Contact</Link>
          <Link to="/projects" className={styles.btn}>Projects</Link>
        </div>
        <div className={styles.logo}>
          <Logo></Logo>
        </div>
      </div>
    </header>
  );
};

export default Home;
