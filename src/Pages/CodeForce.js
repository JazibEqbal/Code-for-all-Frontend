import React from 'react'
import CurrentContest from '../Components/Contests/CurrentContest';
import PastContests from '../Components/Contests/PastContest';
import NavBar from '../Screen/NavBar';

function CodeForce() {

  const DUMMY_LIST = [
    { id: 1, contestname: "First contest", date: "today" },
    { id: 2, contestname: "Second contest", date: "today" },
    { id: 3, contestname: "Third contest", date: "today" },
    { id: 4, contestname: "Daily ka contest", date: "today" }
  ];
  
  return (
    <React.Fragment>
      <NavBar />
      <CurrentContest />
      <PastContests contestList={DUMMY_LIST}/>
    </React.Fragment>
  )
}

export default CodeForce