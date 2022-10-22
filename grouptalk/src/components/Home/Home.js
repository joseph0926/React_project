import React, { useEffect } from "react";

import styles from "./Home.module.css";
import Img1 from "../../assets/chat.png";

const Home = () => {
  return (
    <div className={styles.content}>
      <div className={styles.center}></div>
      <div className={styles.center}></div>
      <section className={styles.main}>
        <div className={styles["main-text"]}>
          <h2>안타까운 사람들의 모임..</h2>
          <br></br>
          <h3>Asshole Talk</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id ante rutrum, porta mauris in, rutrum lacus. Maecenas blandit,
            ex vitae auctor ullamcorper, est libero cursus purus, dignissim pharetra lorem diam at massa. Pellentesque rutrum erat ut cursus
            porta. Morbi efficitur nunc quis malesuada sodales. Fusce ut mi non odio tempus volutpat sed vitae nibh. Nam ut massa iaculis
          </p>
          <a href="#">둘러보기..</a>
        </div>
        <img src={Img1} className={styles["main-img"]}></img>
      </section>
    </div>
  );
};

export default Home;
