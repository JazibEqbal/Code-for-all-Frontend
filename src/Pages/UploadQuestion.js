import React, { useReducer } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Input from "../Components/UI/Input";
import NavBar from "../Screen/NavBar";
import styles from "./UploadQuestion.module.css";

const saveAns = (answer, quesId) => {
  axios({
    method: "put",
    url: `${process.env.REACT_APP_BACKEND_URL}/questions/solution/${quesId}`,
    headers: {
      Authorization: process.env.REACT_APP_SUPPORT_TOKEN,
    },
    data: {
      answer,
    },
  })
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
};

const saveQues = (answer, question, contest) => {
  axios({
    method: "post",
    url: `${process.env.REACT_APP_BACKEND_URL}/questions`,
    headers: {
      Authorization: process.env.REACT_APP_SUPPORT_TOKEN,
    },
    data: {
      contest,
      question,
      answer: answer.size !== 0 ? answer : null,
    },
  })
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
};

const answerReducer = (state, actions) => {
  if (actions.type === "USER_INPUT") {
    return { value: actions.val, isValid: true };
  }
  if (actions.type === "INPUT_BLUR") {
    return { value: state.value, isValid: true };
  }
  return { value: "", isValid: false };
};

const questionReducer = (state, actions) => {
  if (actions.type === "USER_INPUT") {
    return { value: actions.val, isValid: true };
  }
  if (actions.type === "INPUT_BLUR") {
    return { value: state.value, isValid: true };
  }
  return { value: "", isValid: false };
};

const UploadQuestion = (props) => {
  const location = useLocation();

  const currContest = location.state ? location.state.currContest : null;
  const currQues = location.state ? location.state.question : null;

  const [answerState, dispatchAnswer] = useReducer(answerReducer, {
    value: "",
    isValid: null,
  });

  const answerChangeHandler = (event) => {
    dispatchAnswer({ type: "USER_INPUT", val: event.target.value });
  };

  const validateAnswerHandler = () => {
    dispatchAnswer({ type: "INPUT_BLUR" });
  };

  const [questionState, dispatchQuestion] = useReducer(questionReducer, {
    value: "",
    isValid: null,
  });

  const questionChangeHandler = (event) => {
    dispatchQuestion({ type: "USER_INPUT", val: event.target.value });
  };

  const validateQuestionHandler = () => {
    dispatchQuestion({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (currQues) saveAns(answerState.value, currQues._id);
    else saveQues(answerState.value, questionState.value, currContest._id);
  };

  const RenderQues = () => {
    if (currQues) return <h3>Q. {currQues.question}</h3>;
    else
      return (
        <Input
          id="question"
          type="text"
          label="Question"
          onChange={questionChangeHandler}
          onBlur={validateQuestionHandler}
          value={questionState.value}
        />
      );
  };

  return (
    <React.Fragment>
      <NavBar />
      <div className={styles.uploadQuestionsMain}>
        <div className={styles.mainContainerQuestionUpload}>
          <h1 className={styles.questionHeadingStyle}>
            Upload Question Solution
          </h1>
          <form onSubmit={submitHandler}>
            <h3 className={styles.contestQuestionStyle}>
              {currContest && currContest.contestname}
            </h3>
            <RenderQues />
            <Input
              id="answer"
              type="text"
              label="Solution"
              onChange={answerChangeHandler}
              onBlur={validateAnswerHandler}
              value={answerState.value}
            />
            <button className={styles.questionButtonUpload}>Upload</button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UploadQuestion;
