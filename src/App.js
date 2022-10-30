import "./App.css";
import Dashboard from "./Screen/Dashboard";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CodeChef from "./Pages/CodeChef";
import CodeForce from "./Pages/CodeForce";
import LeetCode from "./Pages/LeetCode";
import Questions from "./Pages/Questions";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/codechef" element={<CodeChef />}></Route>
          <Route path="/codeforce" element={<CodeForce />}></Route>
          <Route path="/leetcode" element={<LeetCode />}></Route>
          <Route path="/question/:contestid" element={<Questions />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
