import React from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor="email">{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value} //everything is pulled from the objects involved in reducer
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
};
export default Input;
