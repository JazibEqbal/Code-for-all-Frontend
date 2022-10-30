import React from 'react'
import CurrentContest from '../Components/Contests/CurrentContest';
import PastContests from '../Components/Contests/PastContest';
import NavBar from '../Screen/NavBar';

function CodeChef() {
  
  const DUMMY_LIST = [
    { id: 1, contestname: "First contest", questions: [1,2,3] },
    { id: 2, contestname: "Second contest", questions: [4,5,6,7] }
  ];
  
  const contest = {id: 3, contestname: "Ongoing contest", questions: [7,8,9]}
  
  return (
    <React.Fragment>
      <NavBar />
      <CurrentContest contest={contest}/>
      <PastContests contestList={DUMMY_LIST} />
    </React.Fragment>
  )
}

export default CodeChef;