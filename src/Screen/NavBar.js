import React, { useContext } from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import AuthContext from "../Store/auth-context";

function NavBar() {
  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
      <div>
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
          {ctx.isLoggedIn && <h3 className={styles.heading}>Admin</h3>}
          <Link to="/upload/contest" className={styles.linkTextButton}>
            <button className={styles.uploadContestButton}>
              Upload Contest
            </button>
          </Link>
        </nav>
        <button className={`${styles.uploadContestButton} ${styles.logoutButton}`}>Log out</button>
      </div>
    </React.Fragment>
  );
}

export default NavBar;
