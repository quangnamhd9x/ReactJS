import React from "react";
import styles from "./Button.module.css";
// import "./Button.scss";

const Button = (props) => {
  return (
    <button
      className={`${styles.button} ${
        props.secondary ? styles.buttonSecondary : ""
      }`}
    >
      {props.children}
    </button>
  );
};

export default Button;
