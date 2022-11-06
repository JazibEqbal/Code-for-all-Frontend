import React, { useReducer, useState } from "react";
import axios from "axios";
import Input from "../Components/UI/Input";
import NavBar from "../Screen/NavBar";
import styles from "./UploadContest.module.css";
import { useNavigate } from "react-router-dom";

const saveContest = async (dateofcontest, organiser, contestname) => {
  const res = await axios({
    method: "post",
    url: `${process.env.REACT_APP_BACKEND_URL}/contest`,
    headers: {
      Authorization: `JWT ${localStorage.getItem('token')}`,
    },
    data: {
      dateofcontest,
      organiser,
      contestname,
    },
  })
  
  if(res.status === 200){
    return res.data.user;
  }
};

const organiserReducer = (state, actions) => {
  if (actions.type === "USER_INPUT") {
    return { value: actions.val, isValid: true };
  }
  if (actions.type === "INPUT_BLUR") {
    return { value: state.value, isValid: true };
  }
  return { value: "", isValid: false };
};

const contestReducer = (state, actions) => {
  if (actions.type === "USER_INPUT") {
    return { value: actions.val, isValid: true };
  }
  if (actions.type === "INPUT_BLUR") {
    return { value: state.value, isValid: true };
  }
  return { value: "", isValid: false };
};

const UploadContest = (props) => {
  const [date, setDate] = useState("");

  const [organiserState, dispatchOrganiser] = useReducer(organiserReducer, {
    value: "",
    isValid: null,
  });

  const [contestState, dispatchContest] = useReducer(contestReducer, {
    value: "",
    isValid: null,
  });

  const organiserChangeHandler = (event) => {
    dispatchOrganiser({ type: "USER_INPUT", val: event.target.value });
  };

  const contestChangeHandler = (event) => {
    dispatchContest({ type: "USER_INPUT", val: event.target.value });
  };

  const validateOrganiserHandler = () => {
    dispatchOrganiser({ type: "INPUT_BLUR" });
  };

  const validateContestHandler = () => {
    dispatchContest({ type: "INPUT_BLUR" });
  };

  const dateHandler = (event) => {
    setDate(event.target.value);
  };

  const navigate = useNavigate();
  const submithandler = async (event) => {
    event.preventDefault();
    const contest = await saveContest(new Date(date), organiserState.value, contestState.value);
    navigate(`/question/${contest._id}`, { state : { contest } })
  };

  return (
    <React.Fragment>
      <NavBar />
      <div className={styles.uploadMain}>
        <div className={styles.mainContainerUpload}>
          <h1>Upload New Contest</h1>
          <form onSubmit={submithandler}>
            <Input
              id="organiser"
              type="text"
              label="Organiser"
              value={organiserState.value}
              onChange={organiserChangeHandler}
              onBlur={validateOrganiserHandler}
              isValid={organiserState.isValid}
            />
            <Input
              id="contestname"
              type="text"
              label="Contest Name"
              value={contestState.value}
              onChange={contestChangeHandler}
              onBlur={validateContestHandler}
              isValid={contestState.isValid}
            />
            <Input
              id="dateofcontest"
              type="datetime-local"
              label="Date of Contest"
              value={date}
              onChange={dateHandler}
            />
              <button className={styles.uploadButtonUpload}>Upload</button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UploadContest;
