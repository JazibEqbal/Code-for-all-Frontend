import React from "react";

const PastContests = props => {

  const renderList = props.contestList.map(item =>
    <li key={item.id}>
      {item.contestname}
    </li>
  );
  
  return (
    <React.Fragment>
      <h2>Past Contests</h2>
      <ul>{renderList}</ul>
    </React.Fragment>
  );
};

export default PastContests;
