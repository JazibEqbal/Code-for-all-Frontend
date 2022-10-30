import React from "react";
import { Link } from "react-router-dom";

const CurrentContest = props => {

  const RenderCurrentContest = () => {
    const contest = props.contest;
    if (contest)
      return (
        <React.Fragment>
          <h2>Ongoing Contest</h2>
          <p>
            {contest.contestname}
            <Link to={`/question/${contest.id}`} state={{ contest }}>
              Solutions
            </Link>
          </p>
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
