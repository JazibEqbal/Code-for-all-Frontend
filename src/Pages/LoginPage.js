import React, { useReducer, useContext } from "react";
import NavBar from "../Screen/NavBar";
import Input from "../Components/UI/Input";
import AuthContext from "../Store/auth-context";
import styles from "./LoginPage.module.css";
import { Link } from "react-router-dom";

const emailReducer = (state, actions) => {
  if (actions.type === "USER_INPUT") {
    return { value: actions.val, isValid: actions.val.includes("@") };
  }
  if (actions.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, actions) => {
  if (actions.type === "USER_INPUT") {
    return { value: actions.val, isValid: actions.val.trim().length > 8 };
  }
  if (actions.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 8 };
  }
  return { value: "", isValid: false };
};

const LoginPage = (props) => {
  const authCtx = useContext(AuthContext);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authCtx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <React.Fragment>
      <NavBar />
      <div className={styles.loginMain}>
        <div className={styles.loginContainer}>
          <h1 className={styles.headingLogin}>Log In</h1>
          <form onSubmit={submitHandler}>
            <Input
              id="email"
              type="email"
              label="E-Mail"
              onChange={emailChangeHandler}
              onBlur={validateEmailHandler}
              value={emailState.value}
              isValid={emailState.isValid}
            />
            <Input
              id="password"
              type="password"
              label="Password"
              onChange={passwordChangeHandler}
              onBlur={validatePasswordHandler}
              value={passwordState.value}
              isValid={passwordState.isValid}
            />
            <Link to="/" className={styles.loginSubmitButton}>
              <button className={styles.loginButton}>Submit</button>
            </Link>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginPage;
