import React from "react";
import { Link } from "react-router-dom";
import styles from "./PastContest.module.css";

const PastContests = (props) => {
  const renderList = props.contestList.map((contest) => (
    <div>
      <h4 key={contest.id}>
        {contest.contestname}
        <Link to={`/question/${contest.id}`} state={{ contest }}>
          Solutions
        </Link>
      </h4>
    </div>
  ));

  return (
    <React.Fragment>
      <div className={styles.pastContestMain}>
        <h2 className={styles.pastHeading}>Past Contests</h2>
        <h4 className={styles.pastContestitems}>{renderList}</h4>
      </div>
    </React.Fragment>
  );
};

export default PastContests;
