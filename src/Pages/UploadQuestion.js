import React, { useReducer } from "react";
import axios from 'axios';
import { useLocation } from "react-router-dom";
import Input from "../Components/UI/Input";
import NavBar from "../Screen/NavBar";

const saveQues = (answer,quesId) => {
  axios({
    method: 'put',
    url : `${process.env.REACT_APP_BACKEND_URL}/questions/solution/${quesId}`,
    headers: {
      Authorization: process.env.REACT_APP_SUPPORT_TOKEN
    },
    data: {
      answer,
    }
  }).then(res => console.log(res))
  .catch(e => console.log(e));
}

const answerReducer = (state, actions) => {
  if (actions.type === "USER_INPUT") {
    return { value: actions.val, isValid: true };
  }
  if (actions.type === "INPUT_BLUR") {
    return { value: state.value, isValid: true };
  }
  return { value: "", isValid: false };
};

const UploadQuestion = props => {
  const location = useLocation();
  const currContest = location.state.currContest;
  const currQues = location.state.question;

  const [answerState, dispatchAnswer] = useReducer(answerReducer, {
    value: "",
    isValid: null
  });

  const answerChangeHandler = event => {
    dispatchAnswer({ type: "USER_INPUT", val: event.target.value });
  };

  const validateAnswerHandler = () => {
    dispatchAnswer({ type: "INPUT_BLUR" });
  };
  
  const submitHandler = event => {
    event.preventDefault();
    console.log(answerState.value)
    saveQues(answerState.value,currQues._id);
  }

  const RenderQues = () => {
    if (currQues)
      return (
        <h3>
          {currQues.question}
        </h3>
      );
    else return <Input id="question" type="text" label="Question" />;
  };

  return (
    <React.Fragment>
      <NavBar />
      <div>
        <h1>Upload Question Solution</h1>
        <form onSubmit={submitHandler}>
          <h3>
            {currContest.contestname}
          </h3>
          <RenderQues />
          <Input
            id="answer"
            type="text"
            label="Answer"
            onChange={answerChangeHandler}
            onBlur={validateAnswerHandler}
            value={answerState.value}
          />
          <button>Upload</button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default UploadQuestion;
