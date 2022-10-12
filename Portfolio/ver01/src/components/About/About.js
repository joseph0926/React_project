import React from 'react'
import styles from "./About.module.css"
import AboutSide from './AboutSide'

import IMG from "../../assets/about.jpg"
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section id='about' className={styles.container}>
      <div className={styles.card}>
        <div className={styles.line}></div>
        <div className={styles.imgBox}>
          <img src={IMG}></img>
        </div>
        <div className={styles.content}>
          <div className={styles.detail}>
            <h2>김영훈<br></br><span>프론트엔드 + 백엔드</span></h2>
          </div>
          <div className={styles.data}>
            <h3>GitHub<br></br><a href='https://github.com/joseph0926'>Go</a></h3>
            <h3>Blog<br></br><a href='https://joseph0926.tistory.com/'>Go</a></h3>
          </div>
          <div className={styles.btn}>
            <Link to="/projects">Projects</Link>
          </div>
        </div>
      </div>
      <AboutSide></AboutSide>
    </section>
  )
}

export default About