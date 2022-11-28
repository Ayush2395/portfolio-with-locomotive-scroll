import React from "react";
import styles from "../styles/Button.module.css";

type ButtonProps = {
  title: string;
  className?: string | boolean;
  onClickEvent?: () => any;
};

const Button: React.FC<ButtonProps> = ({ title, className, onClickEvent }) => {
  return (
    <>
      <button className={`${styles.btn} ${className} duration-200`} onClick={onClickEvent}>
        {title}
      </button>
    </>
  );
};

export default Button;
