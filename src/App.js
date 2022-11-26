import "./App.css";
import Dashboard from "./Screen/Dashboard";
import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CodeChef from "./Pages/CodeChef";
import CodeForce from "./Pages/CodeForce";
import LeetCode from "./Pages/LeetCode";
import Questions from "./Pages/Questions";
import LoginPage from "./Pages/LoginPage";
import UploadContest from "./Pages/UploadContest";
import UploadQuestion from "./Pages/UploadQuestion";
import AuthContext from "./Store/auth-context";
import Solution from "./Pages/Solution";
import Error from "./Screen/Error";
function App() {
  const ctx = useContext(AuthContext);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/codechef" element={<CodeChef />} />
          <Route path="/codeforce" element={<CodeForce />} />
          <Route path="/leetcode" element={<LeetCode />} />
          <Route path="/question/:contestid" element={<Questions />} />
          <Route path="/login" element={<LoginPage />} />
          {ctx.isLoggedIn &&
            <Route path="/upload/contest" element={<UploadContest />} />}
          {ctx.isLoggedIn &&
            <Route
              path="/upload/question/:contestid"
              element={<UploadQuestion />}
            />}
          <Route path="/solution/:questionId" element={<Solution />} />
        </Routes>
      </div>
      <footer className="Footer">
        <a className="link" href="https://merchant.razorpay.com/policy/KbEPLZlXoEwkRd/privacy">Privacy</a> | 
        <a className="link" href="https://merchant.razorpay.com/policy/KbEPLZlXoEwkRd/terms"> TnC</a> | 
        <a className="link" href="https://merchant.razorpay.com/policy/KbEPLZlXoEwkRd/refund"> Refund Policy</a> | 
        <a className="link" href="https://merchant.razorpay.com/policy/KbEPLZlXoEwkRd/shipping"> Shipping</a> | 
        <a className="link" href="https://merchant.razorpay.com/policy/KbEPLZlXoEwkRd/contact_us"> Contact us</a>
      </footer>
    </Router>
  );
}

export default App;
