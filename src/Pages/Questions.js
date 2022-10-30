import React, { useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import NavBar from "../Screen/NavBar";
import AuthContext from "../Store/auth-context";

const Questions = props => {
  const ctx = useContext(AuthContext);

  const location = useLocation();
  const currContest = location.state.contest;

  const DUMMY_QUESTIONS = [
    {
      id: 1,
      question: "My ques 1",
      solution: true,
      answer: "Ans 1",
      contest: currContest.id
    },
    { id: 2, question: "My ques 2", solution: false, contest: currContest.id }
  ];

  const renderList = DUMMY_QUESTIONS.map(item =>
    <div key={item.id}>
      <h4>
        {item.question}
      </h4>
      <p>Solution</p>
      {ctx.isLoggedIn &&
        <Link to={`/upload/question/${currContest.id}`} state={{ currContest }}>
          Upload
        </Link>}
    </div>
  );

  return (
    <React.Fragment>
      <NavBar />
      <h2>
        {currContest.contestname}
      </h2>
      {renderList}
    </React.Fragment>
  );
};

export default Questions;
