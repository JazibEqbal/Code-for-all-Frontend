import React from "react";
import { Link } from "react-router-dom";
import styles from "./PastContest.module.css";

const PastContests = (props) => {
  const renderList = props.contestList.map((contest) => (
    <div key={contest._id}>
      <p className={styles.pastContestitems}>
        <Link to={`/question/${contest._id}`} state={{ contest }}>
          {contest.contestname}
        </Link>
      </p>
    </div>
  ));

  return (
    <React.Fragment>
      <div className={styles.pastContestTopHead}>
        <div className={styles.pastContestMain}>
          <h2 className={styles.pastHeading}>Past Contests</h2>
          <h4 className={styles.pastText}>{renderList}</h4>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PastContests;
