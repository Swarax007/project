import React from "react";
import classes from "./Button.css";
function Button(props) {
  return <button className="button">{props.data}</button>;
}

export default Button;