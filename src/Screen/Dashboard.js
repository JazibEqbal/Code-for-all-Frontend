import React from "react";
import Advertisement from "./Advertisement";
import NavBar from "./NavBar";
import Recent from "./Recent";

function Dashboard() {
  return (
    <div>
      <NavBar />
      <Recent />
      <Advertisement />
    </div>
  );
}

export default Dashboard;
