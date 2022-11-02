import React, { useEffect, useState } from "react";
import axios from "axios";
import CurrentContest from "../Components/Contests/CurrentContest";
import PastContests from "../Components/Contests/PastContest";
import NavBar from "../Screen/NavBar";
import styles from './CodeChef.module.css';

const CodeChef = () => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/contest/organiser/codechef`
      );
      setResponse(res.data.contest);
    }
    getData();
  }, []);

  const ongoing = response.filter((item) => item.ongoing === true);
  const past = response.filter((item) => item.ongoing !== true);

  return (
    <React.Fragment>
      <NavBar />
      <div className={styles.CodeChefMain}>
        <CurrentContest contest={ongoing[0]} />
        <PastContests contestList={past} />
      </div> 
    </React.Fragment>
  );
};

export default CodeChef;
