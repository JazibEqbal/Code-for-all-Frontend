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
            <h2 className={styles.ongoingHeading}>Ongoing Contests</h2>
            <p className={styles.ongoingContestItems}>
              <Link to={`/question/${contest._id}`} state={{ contest }}>
                {contest.contestname}
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
