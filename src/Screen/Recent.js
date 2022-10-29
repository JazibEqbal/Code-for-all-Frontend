import React from "react";
import styles from "./Recent.module.css";
function Recent() {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.recentContainer}>
        <div className={styles.recentContents}>
          {/* <h1>hdhdhd</h1> */}
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="img" />
          
        </div>
      </div>
    </div>
  );
}

export default Recent;
