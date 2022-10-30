import React from "react";
import { Link } from "react-router-dom";

const PastContests = props => {

  const renderList = props.contestList.map(contest =>
    <li key={contest.id}>
      {contest.contestname}
      <Link to={`/question/${contest.id}`} state={{ contest }}>
        Solutions
      </Link>
    </li>
  );

  return (
    <React.Fragment>
      <h2>Past Contests</h2>
      <ul>
        {renderList}
      </ul>
    </React.Fragment>
  );
};

export default PastContests;
