import React from "react";
import styles from "./Contest.module.css";
function Contests() {
  return (
    <div className={styles.contestsMain}>
      <div className={styles.contestNames}>
        <h3>Contest name 1</h3>
        <h3>Contest name 2</h3>
        <h3>Contest name 3</h3>
        <h3>Contest name 4</h3>
      </div>
    </div>
  );
}

export default Contests;
