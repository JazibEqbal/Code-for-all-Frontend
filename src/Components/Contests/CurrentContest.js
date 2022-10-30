import React from "react";
import { Link } from "react-router-dom";
import styles from "./CurrentContest.module.css";

const CurrentContest = (props) => {
  const RenderCurrentContest = () => {
    const contest = props.contest;
    if (contest)
      return (
        <React.Fragment>
          <div className={styles.CurrentContestMain}>
            <h2>Ongoing Contest</h2>
            <p>
              {contest.contestname}
              <Link to={`/question/${contest.id}`} state={{ contest }}>
                Solutions
              </Link>
            </p>
          </div>
        </React.Fragment>
      );
  };

  return (
    <React.Fragment>
      <RenderCurrentContest />
    </React.Fragment>
  );
};

export default CurrentContest;
