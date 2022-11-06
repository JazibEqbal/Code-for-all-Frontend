import React, { useEffect, useState } from "react";
import axios from "axios";
import CurrentContest from "../Components/Contests/CurrentContest";
import PastContests from "../Components/Contests/PastContest";
import NavBar from "../Screen/NavBar";
import styles from './LeetCode.module.css';

function LeetCode() {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/contest/organiser/leetcode`
      );
      setResponse(res.data.contest);
    }
    getData();
  }, []);

  const ongoing = response.filter(
    item => new Date(item.dateofcontest) - new Date() > 0
  );
  const past = response.filter(
    item => new Date(item.dateofcontest) - new Date() <= 0
  );

  return (
    <React.Fragment>
      <NavBar />
      <div className={styles.leetCodeMain}>
        <CurrentContest contest={ongoing[0]} />
        <PastContests contestList={past} />
      </div>
    </React.Fragment>
  );
}

export default LeetCode;
