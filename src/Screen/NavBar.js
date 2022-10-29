import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className={styles.mainBlock}>
    <nav className={styles.navbar}>
      <Link to="/codechef" className={styles.heading}>
        CodeChef
      </Link>
      <Link to="/codeforce" className={styles.heading}>
        CodeForces
      </Link>
      <Link to="/leetcode" className={styles.heading}>
        LeetCode
      </Link>
    </nav>
    </div>
  );
}

export default NavBar;
