import React from "react";
import styles from "./PastContest.module.css";

const PastContests = (props) => {
  const renderList = props.contestList.map((contest) => (
    <div key={contest.id}>
      <p className={styles.pastContestitems}>
        <a href={`/question/${contest.id}`} state={{ contest }}>
          {contest.contestname}
        </a>
      </p>
    </div>
  ));

  return (
    <React.Fragment>
      <div className={styles.pastContestMain}>
        <h2 className={styles.pastHeading}>Past Contests</h2>
        <p className={styles.pastText}>{renderList}</p>
      </div>
    </React.Fragment>
  );
};

export default PastContests;
