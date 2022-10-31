import React from "react";
import styles from "./Input.module.css";

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
    <div className={styles.control}>
      <label className={styles.headingControl} htmlFor={props.id}>
        {props.label}
      </label>
      <input
        className={styles.inputControl}
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
