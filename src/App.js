import "./App.css";
import Dashboard from "./Screen/Dashboard";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CodeChef from "./Pages/CodeChef";
import CodeForce from "./Pages/CodeForce";
import LeetCode from "./Pages/LeetCode";
import Questions from "./Pages/Questions";
import LoginPage from "./Pages/LoginPage";
import UploadContest from "./Pages/UploadContest";
import UploadQuestion from "./Pages/UploadQuestion";
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
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/upload/contest" element={<UploadContest />}></Route>
          <Route path="/upload/question/:contestid" element={<UploadQuestion />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
