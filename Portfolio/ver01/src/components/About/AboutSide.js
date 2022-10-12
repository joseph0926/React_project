import React from 'react'
import styles from "./AboutSide.module.css"

const AboutSide = () => {
  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <h2>Front</h2>
        <p>HTML, CSS, JavaScript, React</p>
      </div>
      <div className={styles.list}>
        <h2>Back</h2>
        <p>NodeJs, Spring</p>
      </div>
      <div className={styles.list}>
        <h2>Others</h2>
        <p>ReactNative, Python</p>
      </div>
    </div>
  )
}

export default AboutSide