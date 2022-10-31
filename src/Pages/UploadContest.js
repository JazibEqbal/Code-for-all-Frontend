import React, { useReducer, useState } from "react";
import Input from "../Components/UI/Input";
import NavBar from "../Screen/NavBar";

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

  const submithandler = (event) => {
    event.preventDefault();
    console.log(date,organiserState.value,contestState.value);
  };
  
  return (
    <React.Fragment>
      <NavBar />
      <div>
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
            type="date"
            label="Date of Contest"
            value={date}
            onChange={dateHandler}
          />
          <button>Upload</button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default UploadContest;
