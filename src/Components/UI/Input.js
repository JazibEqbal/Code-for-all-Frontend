import React from "react";
import classes from "./Input.module.css";

const Input = props => {

  if (props.type === "radio") {
    return (
      <React.Fragment>
        <label htmlFor={props.id}>
          {props.label}
        </label>
        <input
          type={props.type}
          id={props.id}
          name={props.name}
          value={props.value}
        />
      </React.Fragment>
    );
  }

  return (
    <div className={classes.control}>
      <label htmlFor={props.id}>
        {props.label}
      </label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
};

export default Input;
