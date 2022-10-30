import React from "react";
import Advertisement from "./Advertisement";
import styles from "./Recent.module.css";
function Recent() {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.recentContainer}>
        <div className={styles.recentContents}>
          <h3>rc-1 This is recent contest</h3>
        </div>
      </div>
      <div className={styles.advertisement}>
        <Advertisement />
      </div>
    </div>
  );
}

export default Recent;
