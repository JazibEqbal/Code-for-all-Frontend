import React from "react";
import styles from "./Contest.module.css";
function Contests() {
  return (
    <div className={styles.contestsMain}>
      <h2>Live Contests</h2>
      <div className={styles.contestNames}>
        <p className={styles.contestLinks}>
          <a href="/contest">Contest 1 link</a>
        </p>
        <p className={styles.contestLinks}>
          <a href="/contest">Contest 2 link</a>
        </p>
      </div>
    </div>
  );
}

export default Contests;
