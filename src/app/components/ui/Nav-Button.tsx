import React from "react";
import { ButtonProps } from "@/app/types/Button";
import classes from "./Nav-Button.module.css";

const NavButton: React.FC<ButtonProps> = (props) => {
  return (
    <button className={classes.btn}>
      {props.text}
    </button>
  );
};

export default NavButton;
