import React, { useReducer, useState } from "react";
import axios from 'axios';
import Input from "../Components/UI/Input";
import NavBar from "../Screen/NavBar";
import styles from "./UploadContest.module.css";

const saveContest = (dateofcontest, organiser, contestname, ongoing) => {
  axios({
    method: 'post',
    url: `${process.env.REACT_APP_BACKEND_URL}/contest`,
    headers: {
      Authorization: process.env.REACT_APP_SUPPORT_TOKEN
    },
    data: {
      dateofcontest,
      organiser,
      contestname,
      ongoing
    }
  }).then(res => console.log(res))
  .catch(e => console.log(e));
}

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

const UploadContest = props => {

  const [date, setDate] = useState('');
  const [ongoing, setOngoing] = useState(false);

  const [organiserState, dispatchOrganiser] = useReducer(organiserReducer, {
    value: "",
    isValid: null
  });

  const [contestState, dispatchContest] = useReducer(contestReducer, {
    value: "",
    isValid: null
  });
  
  const organiserChangeHandler = event => {
    dispatchOrganiser({ type: "USER_INPUT", val: event.target.value });
  };

  const contestChangeHandler = event => {
    dispatchContest({ type: "USER_INPUT", val: event.target.value });
  };

  const validateOrganiserHandler = () => {
    dispatchOrganiser({ type: "INPUT_BLUR" });
  };

  const validateContestHandler = () => {
    dispatchContest({ type: "INPUT_BLUR" });
  };
  
  const dateHandler = event => {
    setDate(event.target.value);
  }
  
  const changeHandler = event => {
    setOngoing(event.target.value === 'ongoing');
  }

  const submithandler = (event) => {
    event.preventDefault();
    console.log(date,organiserState.value,contestState.value,ongoing);
    saveContest(date,organiserState.value,contestState.value,ongoing);
  };
  
  return (
    <React.Fragment>
      <NavBar />
      <div className={styles.uploadMain}>
        <div className={styles.mainContainerUpload}>
        <h1 className={styles.headingTextUpload}>Upload New Contest</h1>
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
            type="date"
            label="Date of Contest"
            value={date}
            onChange={dateHandler}
          />
          <div onChange={changeHandler}>
            <Input id="upcoming" type="radio" label="Upcoming" value="upcoming" name="ongoing"/>
            <Input id="upcoming" type="radio" label="Ongoing"  value="ongoing" name="ongoing"/>
          </div>
          <button className={styles.uploadButtonUpload}>Upload</button>
        </form>
      </div>
      </div>
    </React.Fragment>
  );
};

export default UploadContest;
