import React from "react";
import Advertisement from "./Advertisement";
import styles from "./Recent.module.css";
function Recent() {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.recentContainer}>
        <div className={styles.recentContents}>
          {/* <h3>rc-1 This is recent contest</h3> */}
          <img src="https://cdn.codechef.com/download/banner/1666227462.jpg" alt="contest" />
        </div>
      </div>
      <div className={styles.advertisement}>
        <Advertisement />
      </div>
    </div>
  );
}

export default Recent;
