import React, { useReducer } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Input from "../Components/UI/Input";
import NavBar from "../Screen/NavBar";
import styles from "./UploadQuestion.module.css";

const saveAns = async (answer, quesId) => {
  await axios({
    method: "put",
    url: `${process.env.REACT_APP_BACKEND_URL}/questions/solution/${quesId}`,
    headers: {
      Authorization: `JWT ${localStorage.getItem("token")}`,
    },
    data: {
      answer,
    },
  })
};

const saveQues = async (answer, question, number, contest) => {
  await axios({
    method: "post",
    url: `${process.env.REACT_APP_BACKEND_URL}/questions`,
    headers: {
      Authorization: `JWT ${localStorage.getItem("token")}`,
    },
    data: {
      contest,
      question,
      number,
      answer: answer.size !== 0 ? answer : null,
    },
  })
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

const numberReducer = (state, actions) => {
  if (actions.type === "USER_INPUT") {
    return { value: actions.val, isValid: actions.val > 0 };
  }
  if (actions.type === "INPUT_BLUR") {
    return { value: state.value, isValid: actions.val > 0 };
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

  const [numberState, dispatchNumber] = useReducer(numberReducer, {
    value: "",
    isValid: null,
  });

  const numberChangeHandler = (event) => {
    dispatchNumber({ type: "USER_INPUT", val: event.target.value });
  };

  const validateNumberHandler = () => {
    dispatchNumber({ type: "INPUT_BLUR" });
  };
  const navigate = useNavigate();
  const submitHandler = async (event) => {
    event.preventDefault();
    if (currQues) await saveAns(answerState.value, currQues._id);
    else
      await saveQues(
        answerState.value,
        questionState.value,
        numberState.value,
        currContest._id
      );
    navigate(`/question/${currContest._id}`,{
      state: {
        contest : currContest,
      }
    });
  };

  const RenderQues = () => {
    if (currQues) return <h3>Q. {currQues.question}</h3>;
    else
      return (
        <React.Fragment>
          <Input
            id="quesnumber"
            type="number"
            label="Question Number"
            onChange={numberChangeHandler}
            onBlur={validateNumberHandler}
            value={numberState.value}
          />
          <Input
            id="question"
            type="text"
            label="Question"
            onChange={questionChangeHandler}
            onBlur={validateQuestionHandler}
            value={questionState.value}
          />
        </React.Fragment>
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
