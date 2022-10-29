import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.heading}>
        Home
      </Link>
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
  );
}

export default NavBar;
