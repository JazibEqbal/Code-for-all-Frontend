import React from "react";
import styles from "./Recent.module.css";
function Recent() {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.recentContainer}>
        <div className={styles.recentContents}>
          <h3>rc-1 This is first contest</h3>
          <h3>rc-2</h3>
          <h3>rc-3</h3>
        </div>
      </div>
      <div className={styles.advertisement}>Advertisement goes here</div>
    </div>
  );
}

export default Recent;
