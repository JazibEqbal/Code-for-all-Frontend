import React from "react";
import Contests from "./Contests";
import NavBar from "./NavBar";
// import Recent from "./Recent";

function Dashboard() {
  return (
    <div>
      <NavBar />
      {/* <Recent /> */}
      <Contests />
    </div>
  );
}

export default Dashboard;
