import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../Screen/NavBar";

const Questions = props => {
  const location = useLocation();
  const currContest = location.state.contest;

  const DUMMY_QUESTIONS = [
    { id: 1, question: "My ques 1", solution: true, answer: "Ans 1", contest: currContest.id },
    { id: 2, question: "My ques 2", solution: false, contest: currContest.id },
  ];
  
  const renderList = DUMMY_QUESTIONS.map(item =>
    <li key={item.id}>
      {item.question}
      {item.answer != null && <p>{item.answer}</p>}
    </li>
  );
  
  return (
    <React.Fragment>
      <NavBar />
      {currContest.contestname}
      <ul>
        {renderList}
      </ul>
    </React.Fragment>
  );
};

export default Questions;
