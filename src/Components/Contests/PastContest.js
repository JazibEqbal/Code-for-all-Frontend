import React from "react";
import { Link } from "react-router-dom";
import styles from "./PastContest.module.css";

const PastContests = (props) => {
  const renderList = props.contestList.map((contest) => (
    <div key={contest._id}>
      <h4>
        {contest.contestname}
        <Link to={`/question/${contest._id}`} state={{ contest }}>
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
