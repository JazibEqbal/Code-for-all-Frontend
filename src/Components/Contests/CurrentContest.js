import React from "react";
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
              <a href={`/question/${contest.id}`} state={{ contest }}>
                {contest.contestname}
              </a>
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
