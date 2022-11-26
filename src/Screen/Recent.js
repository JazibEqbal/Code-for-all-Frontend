import React from "react";
import styles from "./Recent.module.css";
function Recent() {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.recentContainer}>
        <div className={styles.recentContents}>
          <img
            src="https://i.pinimg.com/originals/4d/15/5c/4d155c6f7e5b1c6942059703c403ecaf.jpg"
            alt="contest"
          />
        </div>
      </div>
      <div className={styles.advertisement}></div>
    </div>
  );
}

export default Recent;
